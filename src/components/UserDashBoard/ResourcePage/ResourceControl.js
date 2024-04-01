import { useAppContext } from "../../../context/appContext";
import "./ResourceControl.css";
import React, { useState } from "react";

export default function ResourceControl() {
  const { userResources, subscribedTo, displayAlert, showAlert, alertType, alertText, updateResources, isLoading } = useAppContext();
  const [data,setdata] = useState([
    {
      title: "Name of Cloud",
      content: userResources.name,
      id: 1,
    },
    {
      title: "Cost",
      content: +userResources.cost,
      id: 2,
    },
    {
      title: "Available VM",
      content: userResources.available_VM,
      id: 3,
    },
    {
      title: "Bandwidth",
      content: userResources.network_bandwidth,
      id: 4,
    },
    {
      title: "Security Management",
      content: userResources.security_management,
      id: 5,
    },
    {
      title: "Flexibility",
      content: userResources.flexibility,
      id: 6,
    },
    {
      title: "Response Time",
      content: userResources.response_time,
      id: 7,
    },
  ]);
  const [valid, setvalid] = useState(false);
  const [field, setfield] = useState("");
  const [val, setval] = useState("");
  const isvalid = () => {
    console.log("true");
    setvalid(true);
  };
  const isnotvalid = () => {
    console.log("false");
    setvalid(false);
  };
  // const f = (e) => {
  //   e.preventDefault();
  //   console.log("submit");
  //   let newdata = data.map((d) => {
  //     if (d.title === field) {
  //       return {
  //         ...d,
  //         content: val,
  //       };
  //     } else {
  //       return d;
  //     }
  //   });
  //   console.log(newdata);
  //   setdata(newdata);
  //   setvalid(false);
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    if(field === "network_bandwidth" && (+val < +subscribedTo.min_bandwidth || +val > +subscribedTo.max_bandwidth)){
      console.log((val < subscribedTo.min_bandwidth || val > subscribedTo.max_bandwidth)? "yes" : "no");
      console.log(val + " " + subscribedTo.min_bandwidth + " " + subscribedTo.max_bandwidth);
         console.log("not enough bandwidth");
         displayAlert({alertType: "danger",alertText:  "Not enough resources available!"})
      
    } 
    else if(field === "storage" && (+val < +subscribedTo.min_storage || +val > +subscribedTo.max_storage)){
      
        displayAlert({alertType: "danger",alertText:  "Not enough resources available!"})
     
    } 
     else { const newResources = {
        ...userResources,
       [field] : val
      }
      updateResources(newResources)
      setvalid(false);
    }
      
  }

  return (
    <div className="mt-20">
      <div className="grid grid-cols-4 gap-8 justify-center">
        {data.map((d) => (
          <div key={d.id} className="py-4 px-2 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-700  hover:scale-110 duration-300">
            <h3 className="title text-gray-400 text-s font-bold text-center">
              {d.title}
            </h3>
            <p className="block text-gray-300 text-sm font-bold mb-2 text-center">
              {d.content}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
      <button
      className="update-btn mr-8 mt-9 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={isvalid}
    >
      Update
    </button>
      </div>
      {valid && (
        <div className="grid w-full place-items-center mt-10">
          <div className="w-2/5">
            <form
              className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleUpdate}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tos"
                >
                  Key
                </label>
                <select
                  id="tos"
                  name="tos"
                  value={field}
                  onChange={(e) => setfield(e.target.value)}
                  className="mt-3 mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                >
                  
                  <option value="network_bandwidth">Bandwidth</option>
                  <option value="storage">Storage</option>
                 
                </select>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="value"
                >
                  Value
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="value"
                  value={val}
                  onChange={(e) => setval(e.target.value)}
                  type="text"
                />
              </div>
              <div className="place-items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isLoading}

                >
                  Submit
                </button>
                <button
                  className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                  onClick={isnotvalid}
                  disabled={isLoading}
                >
                  close
                </button>
                {showAlert && <p style={{color: alertType === "danger"? "red" : "green"}}>{alertText}</p>}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
