import {GETGROUP,SETGROUP,CLASSID} from './const'
import axios from 'axios'
import config from '../../modules/config'

let classId="";

let actions = {
	[GETGROUP] ({commit}){
		
		axios.get(config.host+'gy/v3/product/category_list?store_id_list=3&class_id='+classId).then(res=>{
		 commit(SETGROUP,res.data.data.classOneGroup)
//		 commit(CLASSID,res.data.data.childrenList[0].class2Name.id)
		
		
		console.log(res.data.data.childrenList[0].class2Name)
    	
		})
	}
}
export default actions