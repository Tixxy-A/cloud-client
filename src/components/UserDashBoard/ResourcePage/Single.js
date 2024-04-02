import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';
import { useAppContext } from '../../../context/appContext';

export default function Single() {
  const { id } = useParams();
  const [service, setService] = useState();
  const { token } = useAppContext();

  useEffect(() => {
    axios
      .get(
        `https://cloud-server-yfoi.onrender.com/api/v1/user/getProviderDetails/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        //console.log('pop');
        setService(data.data.data.provider);
        //console.log(data.data.data.provider);
      });
  }, [id]);
  if (!service) {
    return <div className="text-red-700">No</div>;
  }
  return (
    <div className="mt-8 mb-5 text-white text-4xl font-bold font-serif w-full ">
      <div className="flex justify-center text-white">{service.name}</div>
      <div className="mt-10 grid grid-cols-4 gap-10 justify-center place-items-center	">
        <Detail name="Bandwidth" val={service.network_bandwidth} unit="mbps" />
        <Detail name="Cost" val={service.cost} unit="Rs" />
        <Detail name="Storage" val={service.max_storage} unit="gb" />
        <Detail name="Response Time" val={service.response_time} unit="ms" />
        <Detail name="Auto Scaling" val={service.auto_scaling} />
        <Detail name="Boot Time" val={service.boot_time} />
        <Detail name="Memory Size" val={service.memory_size} />
        <Detail name="Security Management" val={service.security_management} />
        <Detail name="Storage" val={service.storage} />
        <Detail name="Scale Up" val={service.scale_up} />
        <Detail name="Scale Down" val={service.scale_down} />
        <Detail name="Virtual Machines" val={service.total_VM} />
      </div>
    </div>
  );
}
