import React, { Component } from 'react';

import Backend from '../Layouts/Backend';

export default class Invoice extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner">
                    <div className="invoice-wrapper">
                        <div className="invoice">
                            <div className="invoice-header">
                                <div className="invoice-logo">
                                    <img src="/img/tmp/logo-1.jpg" alt=""/>
                                </div>

                                <div className="invoice-description">
                                    <strong>#AB1234 / Sept. 21, 2017</strong>
                                    <span>Due to: Oct. 12. 2017</span>
                                </div>
                            </div>

                            <div className="invoice-info">
                                <div className="invoice-info-client">
                                    <h4>Client Information</h4>

                                    <p>
                                        John Doe, Mrs Emma Downson<br/>
                                        RootColletions Ltd
                                    </p>

                                    <address>
                                        Berlin, Germany<br/>
                                        9785 45P
                                    </address>
                                </div>

                                <div className="invoice-info-payment">
                                    <h4>Payment Details</h4>
                                    <ul>
                                        <li><strong>VAT:</strong> 32132123</li>
                                        <li><strong>VAT ID:</strong> 345234523</li>
                                        <li><strong>Payment Type:</strong> Root</li>
                                        <li><strong>Name:</strong> Lorem Ipsum</li>
                                        <li><strong>Duration:</strong> Dolor si amet</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="invoice-table">
                                <table>
                                <thead>
                                <tr>
                                <th>#ID</th>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Cost</th>
                                <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>1</td>
                                <td>Software</td>
                                <td>LTS Versions</td>
                                <td>21</td>
                                <td>$321</td>
                                <td>$3452</td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td>Software</td>
                                <td>Support</td>
                                <td>234</td>
                                <td>$6356</td>
                                <td>$23423</td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td>Software</td>
                                <td>Sofware Collection</td>
                                <td>4534</td>
                                <td>$354</td>
                                <td>$23434</td>
                                </tr>
                                </tbody>
                                </table>
                            </div>

                            <div className="invoice-summary">
                                <div>
                                    <span>Sub - Total amount</span>
                                    <strong>$32,432</strong>
                                </div>

                                <div>
                                    <span>Discount</span>
                                    <strong>19.89%</strong>
                                </div>

                                <div>
                                    <span>Grand Total</span>
                                    <strong>$234,234</strong>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
            </Backend>
        );
    }
}
