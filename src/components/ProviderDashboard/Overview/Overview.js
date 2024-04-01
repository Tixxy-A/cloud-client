import { useAppContext } from "../../../context/appContext";


let stats = [
  { name: "Bandwidth", value: "120 MBPS" },
  { name: "Cost", value: "3000 rs" },
  { name: "Response Time", value: "40" },
  { name: "Storage", value: "" },
  { name: "Total VMs", value: "" },
  { name: "Sales", value: "" },
];

export default function Overview() {
  const { provider } = useAppContext();
  stats[0].value = provider.network_bandwidth;
  stats[1].value = provider.cost;
  stats[2].value = provider.response_time;
  stats[3].value = `${provider.storage}GB`;
  stats[4].value = provider.total_VM;
  stats[5].value = provider.sales;

  return (
    <div className="">
      <div className="overflow-hidden " >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="mt-20 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8" >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {provider.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {`${provider.name}`} is a fast, flexible, and affordable platform,
              and its pricing and capabilities make it the best public cloud
              offering on the market. Now let’s take a look at how to put it to
              work for you.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* <button class="mr-100 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full justify-center ">
        Button
      </button> */}
    </div>
  );
}
