import React from 'react'

export default function Orders() {
    return (<div>
            <table className="table table-borderless table-hover table-responsive-md">
                <thead className="bg-light">
                <tr>
                    <th className="py-4 text-uppercase text-sm">Order #</th>
                    <th className="py-4 text-uppercase text-sm">Date</th>
                    <th className="py-4 text-uppercase text-sm">Total</th>
                    <th className="py-4 text-uppercase text-sm">Status</th>
                    <th className="py-4 text-uppercase text-sm">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="py-4 align-middle"># 1735</th>
                    <td className="py-4 align-middle">22/6/2017</td>
                    <td className="py-4 align-middle">$150.00</td>
                    <td className="py-4 align-middle"><span
                        className="badge text-uppercase badge-info p-2">Being prepared</span>
                    </td>
                    <td className="py-4 align-middle"><a href="customer-order.html"
                                                         className="btn btn-outline-dark btn-sm">View</a>
                    </td>
                </tr>
                <tr>
                    <th className="py-4 align-middle"># 1734</th>
                    <td className="py-4 align-middle">7/5/2017</td>
                    <td className="py-4 align-middle">$150.00</td>
                    <td className="py-4 align-middle"><span
                        className="badge text-uppercase badge-warning p-2">Action needed</span></td>
                    <td className="py-4 align-middle"><a href="customer-order.html"
                                                         className="btn btn-outline-dark btn-sm">View</a>
                    </td>
                </tr>
                <tr>
                    <th className="py-4 align-middle"># 1730</th>
                    <td className="py-4 align-middle">30/9/2016</td>
                    <td className="py-4 align-middle">$150.00</td>
                    <td className="py-4 align-middle"><span
                        className="badge text-uppercase badge-success p-2">Received</span></td>
                    <td className="py-4 align-middle"><a href="customer-order.html"
                                                         className="btn btn-outline-dark btn-sm">View</a>
                    </td>
                </tr>
                <tr>
                    <th className="py-4 align-middle"># 1705</th>
                    <td className="py-4 align-middle">22/6/2016</td>
                    <td className="py-4 align-middle">$150.00</td>
                    <td className="py-4 align-middle"><span
                        className="badge text-uppercase badge-danger p-2">Cancelled</span></td>
                    <td className="py-4 align-middle"><a href="customer-order.html"
                                                         className="btn btn-outline-dark btn-sm">View</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
