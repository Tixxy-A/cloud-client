import React, {  } from 'react';


import { useForm } from "react-hook-form";

import {
  
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
  

} from 'mdb-react-ui-kit';
import { useAppContext } from '../../context/appContext';



function SLAForm({ basicModal, setBasicModal, toggleShow}) {
  
  const { slaFormData, setSLAFormData,alertText, alertType, showAlert, isLoading } = useAppContext();

  const {
    register,
    handleSubmit,
   
} = useForm({ mode: "all" });

  /* const [formData, setFormData] = useState(slaData) */
  /* const [basicModal, setBasicModal] = useState(true)
  const toggleShow = () => setBasicModal(!basicModal); */

//   const formSubmit = (e) => {
//     e.preventDefault();
    

//     /* console.log(slaFormData); */
//     console.log(slaFormData)
    
//    toggleShow();

    


//   }
//   const handleChange = (e) => {
//     setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value })




//   }

  return (
    <div className="absolute top-28 mt-3" style={{height:"10px"}}>
   
      <div style={{display: basicModal? "block":"none"}}>
     
        <MDBModalDialog className=''  >
          <MDBModalContent className='mt-2 text-center' >
            <MDBModalHeader className='text-center'>
              <MDBModalTitle className='text-center'> <strong className="text-transparent text-5xl  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" >Service-Level Agreement Template</strong> </MDBModalTitle>
             
            </MDBModalHeader>
            <MDBModalBody className='mt-4'>

            <div className="max-w-xl bg-blue-300 mt-12 mb-24 rounded-lg shadow-2xl mx-auto overflow-hidden z-10">
            <div className="px-16 py-10">
                <form onSubmit={handleSubmit(toggleShow)}>
                    <label className="block text-black text-lg font-bold mb-2" htmlFor="cpucapacity">CPU Capacity</label>
                    <select
                        id="cpucapacity"
                        
                        name="cpu_capacity"
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("cpu_capacity", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                            onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                     
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                      
                        
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="memorysize">Memory Size</label>
                    <select
                        id="memorysize"
                        name="memory_size"
                    
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("memory_size", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                            onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="boottimme">Boot Time</label>
                    <select
                        id="boottimme"
                        
                        name="boot_time"
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("boot_time", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                             onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="scaleup">Scale Up</label>
                    <select
                        id="scaleup"
                        name="scale_up"
                      
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("scale_up", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                             onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="scaledown">Scale Down</label>
                    <select
                        id="scaledown"
                        name="scale_down"
                        
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("scale_down", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                             onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="Scaleuptime">Scale Up Time</label>
                    <select
                        id="Scaleuptime"
                        name="scale_up_time"
                        
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("scale_up_time", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                             onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
            
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="scaledowntime">Scale Down Time</label>
                    <select
                        id="scaledown_ime"
                        name="scale_down_time"
                    
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("scale_down_time", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                             onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="maxconfigvm">Max Configurable VMs</label>
                    <select
                        id="maxconfigvm"
                        name="max_vm_configure"
                        
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("max_vm_configure", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                           onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="autoscaling">Auto Scaling</label>
                    <select
                        id="autoscaling"
                        name="auto_scaling"
                        
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("auto_scaling", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                             onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value }))
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>

                    <label className="block text-black text-lg font-bold mb-2" htmlFor="storage">Storage</label>
                    <select
                        id="storage"
                        name="storage"
                        
                        className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("storage", {
                            required: {
                                value: true,
                                message: "please enter price",
                            },
                            onChange:(e)=>(setSLAFormData({ ...slaFormData, [e.target.name]: e.target.value })),
                        })}
                    >
                    
                    <option value="Extremely High/ Extremely Good (EH/EG)">Extremely High/ Extremely Good (EH/EG)</option>
                    <option value="Very High/Very Good (VH/VG)">Very High/Very Good (VH/VG)</option>
                    <option value="Medium High/ Medium Good (MH/MG)">Medium High/ Medium Good (MH/MG)</option>
                    <option value="Fair/Medium (F/M)">Fair/Medium (F/M)</option>
                    <option value="Medium Low/Medium Bad (ML/MB)">Medium Low/Medium Bad (ML/MB)</option>
                    <option value="Low/Bad (L/B)">Low/Bad (L/B)</option>
                    <option value="Very Low/Very Bad (VL/VB)">Very Low/Very Bad (VL/VB)</option>
                    <option value="Very Very Low/Very Very Bad (VVL/VVB)">Very Very Low/Very Very Bad (VVL/VVB)</option>
                    </select>



                    <button type="submit" className="text-white bg-gradient-to-br from-green-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2" disabled={isLoading}>Confirm SLA template</button>
                    {showAlert && <p style={{color : alertType === "danger" ? "red": "green"}}>{alertText}</p>}
                </form>
            </div>
        </div>
          
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </div>
    </div>
  )
}

export default SLAForm;