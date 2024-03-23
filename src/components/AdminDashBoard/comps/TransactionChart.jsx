import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Client: 4000,
		CSP: 2400
	},
	{
		name: 'Feb',
		Client: 3000,
		CSP: 1398
	},
	{
		name: 'Mar',
		Client: 2000,
		CSP: 9800
	},
	{
		name: 'Apr',
		Client: 2780,
		CSP: 3908
	},
	{
		name: 'May',
		Client: 1890,
		CSP: 4800
	},
	{
		name: 'Jun',
		Client: 2390,
		CSP: 3800
	},
	{
		name: 'July',
		Client: 3490,
		CSP: 4300
	},
	{
		name: 'Aug',
		Client: 2000,
		CSP: 9800
	},
	{
		name: 'Sep',
		Client: 2780,
		CSP: 3908
	},
	{
		name: 'Oct',
		Client: 1890,
		CSP: 4800
	},
	{
		name: 'Nov',
		Client: 2390,
		CSP: 3800
	},
	{
		name: 'Dec',
		Client: 3490,
		CSP: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Client" fill="#0ea5e9" />
						<Bar dataKey="CSP" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
