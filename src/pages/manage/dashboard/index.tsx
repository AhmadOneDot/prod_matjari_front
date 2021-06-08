import { DollarSign, Circle, MoreVertical } from 'react-feather'
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts'
import { ManageLayout } from '../../../layouts/office/manageLayout'

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
export const DashboardPage = (): JSX.Element => (
  <>
    <div className="flex flex-col space-y-8">
      <div className="grid grid-cols-3 gap-x-6">
        <div className="stat shadow-lg rounded-xl border-l-4 border-success relative">
          <div className="stat-figure text-success">
            <Circle className="feather" />
          </div>
          <div className="stat-title capitalize">
            <DollarSign className="feather" />
          </div>
          <div className="stat-value">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
          <div className="absolute top-2 right-1 text-gray-300">
            <MoreVertical size={20} className="feather" />
          </div>
        </div>

        <div
          className="stat shadow-lg rounded-xl border-l-4 border-error relative"
          style={{ borderLeftWidth: '4px', borderColor: 'red' }}
        >
          <div className="stat-figure text-error">
            <Circle className="feather" />
          </div>
          <div className="stat-title capitalize">
            <DollarSign className="feather" />
          </div>
          <div className="stat-value">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
          <div className="absolute top-2 right-1 text-gray-300">
            <MoreVertical size={20} className="feather" />
          </div>
        </div>

        <div
          className="stat shadow-lg rounded-xl border-l-4 border-primary relative"
          style={{ borderLeftWidth: '4px', borderColor: 'blue' }}
        >
          <div className="stat-figure text-primary">
            <Circle className="feather" />
          </div>
          <div className="stat-title capitalize">
            <DollarSign className="feather" />
          </div>
          <div className="stat-value">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
          <div className="absolute top-2 right-1 text-gray-300">
            <MoreVertical size={20} className="feather" />
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="w-1/3">
          <div className="bg-base-100 stat shadow-lg rounded-xl relative">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <p className="capitalize font-bold">revenue</p>
                <div className="btn-group -mr-4">
                  <button type="button" className="btn btn-xs btn-primary btn-active">
                    <span className="font-semibold">year</span>
                  </button>
                  <button type="button" className="btn btn-xs btn-primary btn-outline">
                    <span className="font-semibold">month</span>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <BarChart width={210} height={200} data={data1}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend fontFamily="Fira Sans" fontWeight="bold" />
                  <Bar dataKey="pv" fill="#2f50e9" />
                  <Bar dataKey="uv" fill="#009485" />
                </BarChart>
              </div>
            </div>
            <div className="absolute top-2 right-1 text-gray-300">
              <MoreVertical size={20} className="feather" />
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="bg-base-100 stat shadow-lg rounded-xl relative">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <p className="capitalize font-bold">customers</p>
                <div className="btn-group -mr-4">
                  <button type="button" className="btn btn-xs btn-primary btn-outline">
                    <span className="font-semibold">year</span>
                  </button>
                  <button type="button" className="btn btn-xs btn-primary btn-outline">
                    <span className="font-semibold">month</span>
                  </button>
                  <button type="button" className="btn btn-xs btn-primary btn-active">
                    <span className="font-semibold">day</span>
                  </button>
                </div>
              </div>
              <div>
                <LineChart width={450} height={200} data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize="12" />
                  <YAxis fontSize="12" fontWeight="bold" />
                  <Tooltip />
                  <Line type="monotone" dataKey="pv" stroke="#2f50e9" strokeWidth={2} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#009485" />
                </LineChart>
              </div>
            </div>
            <div className="absolute top-2 right-1 text-gray-300">
              <MoreVertical size={20} className="feather" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        test
      </div>
    </div>
  </>
)

DashboardPage.Layout = ManageLayout

export default DashboardPage
