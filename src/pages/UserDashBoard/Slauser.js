import React from "react";

import { useForm } from "react-hook-form";




export default function Sla() {
    const formSubmit = (val) => {
        console.log(val);
    }
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "all" });
    return (
         <div
        style={{
          height: "100%",
          paddingTop: "8rem",
          paddingBottom: "2rem",
          width: "100vw",
        }}
      >
            <div className="text-center ">
                <h1 className="text-white text-5xl font-semibold">
                    SLA <span className="text-yellow-500">ProposaL</span>
                </h1>
                <div className="max-w-xl bg-blue-300 mt-12 mb-24 rounded-lg shadow-2xl mx-auto overflow-hidden z-10">
                    <div className="px-16 py-10">
                        <form onSubmit={handleSubmit(formSubmit)}>
                            <label className="block text-black text-lg font-bold mb-2" htmlFor="cpucapacity">CPU Capacity</label>
                            <select
                                id="cpucapacity"
                                name="cpucapacity"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("cpucapacity", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="memorysize">Memory Size</label>
                            <select
                                id="memorysize"
                                name="memorysize"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("memorysize", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="boottimme">Boot Time</label>
                            <select
                                id="boottimme"
                                name="boottimme"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("boottimme", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="scaleup">Scale Up</label>
                            <select
                                id="scaleup"
                                name="scaleup"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("scaleup", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="scaledown">Scale Down</label>
                            <select
                                id="scaledown"
                                name="scaledown"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("scaledown", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="Scaleuptime">Scale Up Time</label>
                            <select
                                id="Scaleuptime"
                                name="Scaleuptime"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("Scaleuptime", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="scaledowntime">Scale Down Time</label>
                            <select
                                id="scaledowntime"
                                name="scaledowntime"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("scaledowntime", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="maxconfigvm">Max Configurable VMs</label>
                            <select
                                id="maxconfigvm"
                                name="maxconfigvm"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("maxconfigvm", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>

                            <label className="block text-black text-lg font-bold mb-2" htmlFor="autoscaling">Auto Scaling</label>
                            <select
                                id="autoscaling"
                                name="autoscaling"
                                className="block mb-6 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("autoscaling", {
                                    required: {
                                        value: true,
                                        message: "please enter price",
                                    },
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
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
                                })}
                            >
                                <option value="none">None</option>
                                <option value="Veryhigh">Very High</option>
                                <option value="high">High</option>
                                <option value="meadium">Meadium</option>
                                <option value="low">Low</option>
                                <option value="verylow">Very Low</option>
                            </select>



                            <button type="submit" className="text-white bg-gradient-to-br from-green-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Confirm SLA template</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}