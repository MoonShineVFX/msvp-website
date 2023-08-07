// firebase 資料庫連線
import db from '../firebaseConfig/firebase'
import {collection, query,  getDocs,orderBy,where,limit,limitToLast,startAfter,endBefore,addDoc,deleteDoc,doc,updateDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL,  } from "firebase/storage";
import { async } from '@firebase/util';
const storage = getStorage();


/**
 * 取5筆資料
 * **/
export const getNewestWorks = async (callback) =>{
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'), where("display", "==", '1'),limit(5))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}

/**
 * 到 firebase 撈作品資料表 全部
 * 資料先傳到 mapDataWithImage 處理過圖片路徑再回傳 setWorkData 給網頁用 
 * 條件 display 1 設定顯示的
 * **/ 
export const getWorks = async (callback)=>{
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'), where("display", "==", '1'))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}


// 處理作品的圖片路徑
const mapDataWithImage =async (folder,data , callback)=>{
  let dataSorted = data.sort(function(a, b) {
    return b.sort_num - a.sort_num;
  });
  const twoarr= dataSorted.map( async (element) => {
    const imagesRef = ref(storage, `${folder}/${element.img}`);
    const newimgurl =await getDownloadURL(imagesRef).catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          break;
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
        default:
          console.log('')
      }
    })
    return {...element , imgpath :newimgurl}
   
  })
  callback(await Promise.all(twoarr))
  // setWorkData(await Promise.all(twoarr))
  // setFilteredWorkData(await Promise.all(twoarr))
}
const mapDataWithUid = async (data, callback)=>{
  let dataSorted = data.sort(function(a, b) {
    return b.sort_num - a.sort_num;
  });
  let latestSortNum = (parseInt(dataSorted[0].sort_num)+1).toString()
  const twoarr= dataSorted.map( async (element) => {

    return {...element , latestSortNum :latestSortNum}
   
  })
  callback(await Promise.all(twoarr))
}


/**
 * 到 firebase 撈分類資料表
 * 不用處理圖片路徑的 直接 set
 * **/ 
 export const getCategory = async (callback)=>{
  const q = query(collection(db, "category"),orderBy('sort_num' , 'desc'))
  const data = await getDocs(q);
  // mapCategoryData(data.docs.map(doc=> doc.data()))
  callback(data.docs.map(doc=> doc.data()))
}


/**
 * query by catergory id
 * 按分類 分好作品  給ROW用
 * **/
export const queryByCategoryId = async (cid,callback)=>{

  const q = query(collection(db, "data"), where("category", "==", cid),orderBy('time_added' , 'desc'), where("display", "==", '1'),limit(15));
  const data = await getDocs(q);
  // console.log(data.docs.map(doc=> doc.data()))
  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}


/**
 * 按照分類ID 取得作品的 並且分頁
 * lastestdoc 很重要
 * **/
let latestDoc = null
export const getWorksByCategoryAndLimits = async (cid,callback)=>{

  const q = query(collection(db, "data"), 
    where("category", "==", cid),
    orderBy('time_added' , 'desc'), 
    where("display", "==", '1'))
    ;
  const data = await getDocs(q);
  latestDoc = data.docs[data.docs.length -1 ]


  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}

export const getNextWorksByCategoryAndLimits = async (cid,callback)=>{
  const q = query(collection(db, "data"), 
    where("category", "==", cid),
    orderBy('time_added' , 'desc'),
    startAfter(latestDoc),
    where("display", "==", '1'),limit(10))
    ;
  const data = await getDocs(q);


  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}



/**
 * 到 firebase 撈作品資料表 
 * 資料先傳到 mapDataWithImage 處理過圖片路徑再回傳 setWorkData 給網頁用 
 * 條件 display 全部 要給後台用(admin) 
 * **/ 
export const getAllWorksForDashboard = async (callback)=>{
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'))
  const data = await getDocs(q);

  mapDataWithImage('data',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const getNextWorkForDashboard = async (item , callback) => {
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'),startAfter(item.time_added),limit(30))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const getPrevWorkForDashboard = async (item , callback) => {
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'),endBefore(item.time_added),limitToLast(30))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const createWork = async (data , callback)=>{
  const collectionRef = collection(db ,"data")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteWork = async(uid,callback)=>{
  const workDoc = doc(db , 'data' , uid)
  
  try {
    await deleteDoc(workDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
 export const updateWork = async (uid,currentData,callback)=>{
  const workDoc = doc(db , 'data' , uid)
   
    try {
      await updateDoc( workDoc ,currentData)
      callback('success')
    } catch (error) {
      callback(error)
    }
 }


 //admin category
 export const getAllCategoryForDashboard = async (callback)=>{
  const q = query(collection(db, "category"),orderBy('sort_num' , 'desc'))
  const data = await getDocs(q);
  mapDataWithUid(data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const createCategory = async (data , callback)=>{
  const collectionRef = collection(db ,"category")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteCategory = async(uid,callback)=>{
  const categoryDoc = doc(db , 'category' , uid)
  
  try {
    await deleteDoc(categoryDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const updateCategory = async (uid,currentData,callback)=>{
const categoryDoc = doc(db , 'category' , uid)
  
  try {
    await updateDoc( categoryDoc ,currentData)
    callback('success')
  } catch (error) {
    callback(error)
  }
}

// 學生作品
export const getAllStudentWorks = async (callback)=>{
  const q = query(collection(db, "studentWork"),orderBy('time_added' , 'desc'), where("display", "==", '1'))
  const data = await getDocs(q);

  mapDataWithImage('studentWork',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}
export const getAllStudentWorksForDashboard = async (callback)=>{
  const q = query(collection(db, "studentWork"),orderBy('time_added' , 'desc'),limit(30))
  const data = await getDocs(q);

  mapDataWithImage('studentWork',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}


export const createStudentWork = async (data , callback)=>{
  const collectionRef = collection(db ,"studentWork")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteStudentWork = async(uid,callback)=>{
  const StudentWorkDoc = doc(db , 'studentWork' , uid)
  
  try {
    await deleteDoc(StudentWorkDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
 export const updateStudentWork = async (uid,currentData,callback)=>{
  const StudentWorkDoc = doc(db , 'studentWork' , uid)
   
    try {
      await updateDoc( StudentWorkDoc ,currentData)
      callback('success')
    } catch (error) {
      callback(error)
    }
 }

 // 學生作品分類


 // ABOUT 組員 人員
 export const getAboutUser = async (callback)=>{
  const q = query(collection(db, "AboutUser"),orderBy('time_added' , 'desc'), where("display", "==", '1'))
  const data = await getDocs(q);

  mapDataWithImage('img_team',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}
 export const getAllAboutUserForDashboard = async (callback)=>{
  const q = query(collection(db, "AboutUser"),orderBy('time_added' , 'desc'),limit(30))
  const data = await getDocs(q);

  mapDataWithImage('img_team',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}


export const createAboutUser = async (data , callback)=>{
  const collectionRef = collection(db ,"AboutUser")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteAboutUser = async(uid,callback)=>{
  const AboutUserDoc = doc(db , 'AboutUser' , uid)
  
  try {
    await deleteDoc(AboutUserDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
 export const updateAboutUser = async (uid,currentData,callback)=>{
  const AboutUserDoc = doc(db , 'AboutUser' , uid)
   
    try {
      await updateDoc( AboutUserDoc ,currentData)
      callback('success')
    } catch (error) {
      callback(error)
    }
 }
  // ABOUT 組別 分類
  export const getAllTeamForDashboard = async (callback)=>{
    const q = query(collection(db, "Team"),orderBy('sort_num' , 'desc'))
    const data = await getDocs(q);
    mapDataWithUid(data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
      callback(res)
    })
  }
  
  export const createTeam = async (data , callback)=>{
    const collectionRef = collection(db ,"Team")
    try {
      await addDoc(collectionRef,data)
      callback('success')
    } catch (error) {
      callback(error)
    }
  }
  export const deleteTeam = async(uid,callback)=>{
    const TeamDoc = doc(db , 'Team' , uid)
    
    try {
      await deleteDoc(TeamDoc)
      callback('success')
    } catch (error) {
      callback(error)
    }
  }
  export const updateTeam = async (uid,currentData,callback)=>{
  const TeamDoc = doc(db , 'Team' , uid)
    
    try {
      await updateDoc( TeamDoc ,currentData)
      callback('success')
    } catch (error) {
      callback(error)
    }
  }