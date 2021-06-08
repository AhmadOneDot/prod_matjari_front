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

import { ManageLayout } from '../../layouts/office/manageLayout'

export const DashboardPage = (): JSX.Element => (
  <>
    <div className="flex w-full grid grid-cols-6">
            <div className="mtor-left-banner col-span-2 space-y-3">
                <div className="flex flex-row justify-between">
                    <div className="text-xl font-semibold">Orders</div>
                    <div className="mtor-left-banner-actions grid gap-2 grid-cols-3">
                    <button className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    </button> 
                    <button className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </button> 
                    <button class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    </button> 
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Search Orders" className="input input-bordered w-full" /> 

                </div>
                <div className="mtor-order-item" style={{ borderTop: '1px solid #E5E7EB'}}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-nowrap">
                            <div className="order-thumbnail">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60">
                                    <linearGradient id="tfXvo7Dqu5q1MjBt0sFqXa" x1="32" x2="32" y1="485.25" y2="421.94" 
                                    gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                        <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop>
                                        </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXa)" 
                                        d="M32,58C17.664,58,6,46.337,6,32S17.664,6,32,6s26,11.663,26,26S46.336,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXb" x1="32" x2="32" y1="480" y2="427.333" 
                                        gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                            <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient>
                                            <path fill="url(#tfXvo7Dqu5q1MjBt0sFqXb)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXc" 
                                            x1="32.5" x2="32.5" y1="22" y2="43" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                                <stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop>
                                                </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXc)" d="M25 22H40V24H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXd" x1="32.5" x2="32.5" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop>
                                                <stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXd)" 
                                                d="M25 28H40V30H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXe" x1="31" x2="31" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" 
                                                stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXe)" d="M37,29c0-3.86-3.14-7-7-7v2c2.757,0,5,2.243,5,5s-2.243,5-5,5h-5l1,2h1h3 C33.86,36,37,32.86,37,29z"></path><linearGradient
                                                id="tfXvo7Dqu5q1MjBt0sFqXf" x1="31.976" x2="31.976" y1="22" y2="43" gradientUnits="userSpaceOnUse" 
                                                spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff">
                                                    </stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXf)" d="M38.953 43L26.69 34 25 34 25 35.24 35.572 43z"></path></svg>
                            </div>
                            <div className="order-name text-xs self-center">Mercedes-Mybach S600</div>
                        </div>
                        <div className="order-interaction flex items-center">
                            <div className="order-interaction-padge w-10 h-7 border-2 rounded-xl flex flex-row items-center justify-center justify-between justify-around">
                                <div className="order-interaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="order-interaction-count text-xs">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><span className="pr-3 text-xs uppercase text-gray-400">client:</span><span className="text-lg">Mohammad Anas Jahjah</span></div>
                        <div className="order-client-avatar">
                            <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="https://i.pravatar.cc/30" alt="client" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-short-info flex flex-row justify-between">
                        <div className="order-status bg-success uppercase text-xs px-4 py-2 rounded-md text-success"
                        style={{ backgroundColor: '#A7F3D0'}}>completed</div>
                        <div className="order-created-time text-xs self-center" 
                        style={{ color: '#D1D5DB' }}>17:42 a.m.</div>
                    </div>
                </div>

                <div className="mtor-order-item" style={{ borderTop: '1px solid #E5E7EB'}}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-nowrap">
                            <div className="order-thumbnail">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60">
                                    <linearGradient id="tfXvo7Dqu5q1MjBt0sFqXa" x1="32" x2="32" y1="485.25" y2="421.94" 
                                    gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                        <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop>
                                        </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXa)" 
                                        d="M32,58C17.664,58,6,46.337,6,32S17.664,6,32,6s26,11.663,26,26S46.336,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXb" x1="32" x2="32" y1="480" y2="427.333" 
                                        gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                            <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient>
                                            <path fill="url(#tfXvo7Dqu5q1MjBt0sFqXb)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXc" 
                                            x1="32.5" x2="32.5" y1="22" y2="43" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                                <stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop>
                                                </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXc)" d="M25 22H40V24H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXd" x1="32.5" x2="32.5" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop>
                                                <stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXd)" 
                                                d="M25 28H40V30H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXe" x1="31" x2="31" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" 
                                                stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXe)" d="M37,29c0-3.86-3.14-7-7-7v2c2.757,0,5,2.243,5,5s-2.243,5-5,5h-5l1,2h1h3 C33.86,36,37,32.86,37,29z"></path><linearGradient
                                                id="tfXvo7Dqu5q1MjBt0sFqXf" x1="31.976" x2="31.976" y1="22" y2="43" gradientUnits="userSpaceOnUse" 
                                                spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff">
                                                    </stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXf)" d="M38.953 43L26.69 34 25 34 25 35.24 35.572 43z"></path></svg>
                            </div>
                            <div className="order-name text-xs self-center">Mercedes-Mybach S600</div>
                        </div>
                        <div className="order-interaction flex items-center">
                            <div className="order-interaction-padge w-10 h-7 border-2 rounded-xl flex flex-row items-center justify-center justify-between justify-around">
                                <div className="order-interaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="order-interaction-count text-xs">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><span className="pr-3 text-xs uppercase text-gray-400">client:</span><span className="text-lg">Mohammad Anas Jahjah</span></div>
                        <div className="order-client-avatar">
                            <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="https://i.pravatar.cc/30" alt="client" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-short-info flex flex-row justify-between">
                        <div className="order-status bg-success uppercase text-xs px-4 py-2 rounded-md text-success"
                        style={{ backgroundColor: '#A7F3D0'}}>completed</div>
                        <div className="order-created-time text-xs self-center" 
                        style={{ color: '#D1D5DB' }}>17:42 a.m.</div>
                    </div>
                </div>

                <div className="mtor-order-item" style={{ borderTop: '1px solid #E5E7EB'}}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-nowrap">
                            <div className="order-thumbnail">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60">
                                    <linearGradient id="tfXvo7Dqu5q1MjBt0sFqXa" x1="32" x2="32" y1="485.25" y2="421.94" 
                                    gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                        <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop>
                                        </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXa)" 
                                        d="M32,58C17.664,58,6,46.337,6,32S17.664,6,32,6s26,11.663,26,26S46.336,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXb" x1="32" x2="32" y1="480" y2="427.333" 
                                        gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                            <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient>
                                            <path fill="url(#tfXvo7Dqu5q1MjBt0sFqXb)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXc" 
                                            x1="32.5" x2="32.5" y1="22" y2="43" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                                <stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop>
                                                </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXc)" d="M25 22H40V24H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXd" x1="32.5" x2="32.5" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop>
                                                <stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXd)" 
                                                d="M25 28H40V30H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXe" x1="31" x2="31" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" 
                                                stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXe)" d="M37,29c0-3.86-3.14-7-7-7v2c2.757,0,5,2.243,5,5s-2.243,5-5,5h-5l1,2h1h3 C33.86,36,37,32.86,37,29z"></path><linearGradient
                                                id="tfXvo7Dqu5q1MjBt0sFqXf" x1="31.976" x2="31.976" y1="22" y2="43" gradientUnits="userSpaceOnUse" 
                                                spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff">
                                                    </stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXf)" d="M38.953 43L26.69 34 25 34 25 35.24 35.572 43z"></path></svg>
                            </div>
                            <div className="order-name text-xs self-center">Mercedes-Mybach S600</div>
                        </div>
                        <div className="order-interaction flex items-center">
                            <div className="order-interaction-padge w-10 h-7 border-2 rounded-xl flex flex-row items-center justify-center justify-between justify-around">
                                <div className="order-interaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="order-interaction-count text-xs">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><span className="pr-3 text-xs uppercase text-gray-400">client:</span><span className="text-lg">Mohammad Anas Jahjah</span></div>
                        <div className="order-client-avatar">
                            <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="https://i.pravatar.cc/30" alt="client" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-short-info flex flex-row justify-between">
                        <div className="order-status bg-success uppercase text-xs px-4 py-2 rounded-md text-success"
                        style={{ backgroundColor: '#A7F3D0'}}>completed</div>
                        <div className="order-created-time text-xs self-center" 
                        style={{ color: '#D1D5DB' }}>17:42 a.m.</div>
                    </div>
                </div>

                <div className="mtor-order-item" style={{ borderTop: '1px solid #E5E7EB'}}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-nowrap">
                            <div className="order-thumbnail">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60">
                                    <linearGradient id="tfXvo7Dqu5q1MjBt0sFqXa" x1="32" x2="32" y1="485.25" y2="421.94" 
                                    gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                        <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop>
                                        </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXa)" 
                                        d="M32,58C17.664,58,6,46.337,6,32S17.664,6,32,6s26,11.663,26,26S46.336,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXb" x1="32" x2="32" y1="480" y2="427.333" 
                                        gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                            <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient>
                                            <path fill="url(#tfXvo7Dqu5q1MjBt0sFqXb)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXc" 
                                            x1="32.5" x2="32.5" y1="22" y2="43" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                                <stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop>
                                                </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXc)" d="M25 22H40V24H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXd" x1="32.5" x2="32.5" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop>
                                                <stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXd)" 
                                                d="M25 28H40V30H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXe" x1="31" x2="31" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" 
                                                stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXe)" d="M37,29c0-3.86-3.14-7-7-7v2c2.757,0,5,2.243,5,5s-2.243,5-5,5h-5l1,2h1h3 C33.86,36,37,32.86,37,29z"></path><linearGradient
                                                id="tfXvo7Dqu5q1MjBt0sFqXf" x1="31.976" x2="31.976" y1="22" y2="43" gradientUnits="userSpaceOnUse" 
                                                spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff">
                                                    </stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXf)" d="M38.953 43L26.69 34 25 34 25 35.24 35.572 43z"></path></svg>
                            </div>
                            <div className="order-name text-xs self-center">Mercedes-Mybach S600</div>
                        </div>
                        <div className="order-interaction flex items-center">
                            <div className="order-interaction-padge w-10 h-7 border-2 rounded-xl flex flex-row items-center justify-center justify-between justify-around">
                                <div className="order-interaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="order-interaction-count text-xs">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><span className="pr-3 text-xs uppercase text-gray-400">client:</span><span className="text-lg">Mohammad Anas Jahjah</span></div>
                        <div className="order-client-avatar">
                            <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="https://i.pravatar.cc/30" alt="client" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-short-info flex flex-row justify-between">
                        <div className="order-status bg-success uppercase text-xs px-4 py-2 rounded-md text-success"
                        style={{ backgroundColor: '#A7F3D0'}}>completed</div>
                        <div className="order-created-time text-xs self-center" 
                        style={{ color: '#D1D5DB' }}>17:42 a.m.</div>
                    </div>
                </div>

                <div className="mtor-order-item" style={{ borderTop: '1px solid #E5E7EB'}}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-nowrap">
                            <div className="order-thumbnail">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60">
                                    <linearGradient id="tfXvo7Dqu5q1MjBt0sFqXa" x1="32" x2="32" y1="485.25" y2="421.94" 
                                    gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                        <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop>
                                        </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXa)" 
                                        d="M32,58C17.664,58,6,46.337,6,32S17.664,6,32,6s26,11.663,26,26S46.336,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXb" x1="32" x2="32" y1="480" y2="427.333" 
                                        gradientTransform="matrix(1 0 0 -1 0 486)" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                            <stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient>
                                            <path fill="url(#tfXvo7Dqu5q1MjBt0sFqXb)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXc" 
                                            x1="32.5" x2="32.5" y1="22" y2="43" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                                <stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop>
                                                </linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXc)" d="M25 22H40V24H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXd" x1="32.5" x2="32.5" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop>
                                                <stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXd)" 
                                                d="M25 28H40V30H25z"></path><linearGradient id="tfXvo7Dqu5q1MjBt0sFqXe" x1="31" x2="31" y1="22" y2="43" 
                                                gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" 
                                                stop-color="#e6abff"></stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXe)" d="M37,29c0-3.86-3.14-7-7-7v2c2.757,0,5,2.243,5,5s-2.243,5-5,5h-5l1,2h1h3 C33.86,36,37,32.86,37,29z"></path><linearGradient
                                                id="tfXvo7Dqu5q1MjBt0sFqXf" x1="31.976" x2="31.976" y1="22" y2="43" gradientUnits="userSpaceOnUse" 
                                                spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff">
                                                    </stop></linearGradient><path fill="url(#tfXvo7Dqu5q1MjBt0sFqXf)" d="M38.953 43L26.69 34 25 34 25 35.24 35.572 43z"></path></svg>
                            </div>
                            <div className="order-name text-xs self-center">Mercedes-Mybach S600</div>
                        </div>
                        <div className="order-interaction flex items-center">
                            <div className="order-interaction-padge w-10 h-7 border-2 rounded-xl flex flex-row items-center justify-center justify-between justify-around">
                                <div className="order-interaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="order-interaction-count text-xs">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><span className="pr-3 text-xs uppercase text-gray-400">client:</span><span className="text-lg">Mohammad Anas Jahjah</span></div>
                        <div className="order-client-avatar">
                            <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="https://i.pravatar.cc/30" alt="client" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-short-info flex flex-row justify-between">
                        <div className="order-status bg-success uppercase text-xs px-4 py-2 rounded-md text-success"
                        style={{ backgroundColor: '#A7F3D0'}}>completed</div>
                        <div className="order-created-time text-xs self-center" 
                        style={{ color: '#D1D5DB' }}>17:42 a.m.</div>
                    </div>
                </div>
            </div>

            <div className="col-span-4"
            >
                order content
            </div>
    </div>
  </>
)

DashboardPage.Layout = ManageLayout

export default DashboardPage
