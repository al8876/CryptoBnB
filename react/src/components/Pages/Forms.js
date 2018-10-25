import React, { Component } from 'react';

import Backend from '../Layouts/Backend';

export default class Forms extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner">
                    <div className="row">
                        <div className="col">
                            <h3>Form controls</h3>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">Example select</label>
                                    <select className="form-control" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleSelect2">Example multiple select</label>
                                    <select multiple="" className="form-control" id="exampleSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleTextarea">Example textarea</label>
                                    <textarea className="form-control" id="exampleTextarea" rows="3" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputFile">File input</label>
                                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                    <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                </div>

                                <fieldset className="form-group">
                                    <legend>Radio buttons</legend>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
                                            Option one is this and that—be sure to include why it's great
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
                                            Option two can be something else and selecting it will deselect option one
                                        </label>
                                    </div>

                                    <div className="form-check disabled">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
                                            Option three is disabled
                                        </label>
                                    </div>
                                </fieldset>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        Check me out
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div className="col">
                            <h3>Textual Inputs</h3>

                            <form>
                                <div className="form-group inline">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
                                    <div className="input">
                                        <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" />
                                    </div>
                                </div>

                                <div className="form-group inline">
                                    <label htmlFor="example-search-input" className="col-2 col-form-label">Search</label>
                                    <div className="input">
                                        <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-email-input" className="col-2 col-form-label">Email</label>
                                    <div className="input">
                                        <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-url-input" className="col-2 col-form-label">URL</label>
                                    <div className="input">
                                        <input className="form-control" type="url" value="https://getbootstrap.com" id="example-url-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-tel-input" className="col-2 col-form-label">Telephone</label>
                                    <div className="input">
                                        <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-password-input" className="col-2 col-form-label">Password</label>
                                    <div className="input">
                                        <input className="form-control" type="password" value="hunter2" id="example-password-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-number-input" className="col-2 col-form-label">Number</label>
                                    <div className="input">
                                        <input className="form-control" type="number" value="42" id="example-number-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-datetime-local-input" className="col-2 col-form-label">Date and time</label>
                                    <div className="input">
                                        <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>
                                    <div className="input">
                                        <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-month-input" className="col-2 col-form-label">Month</label>
                                    <div className="input">
                                        <input className="form-control" type="month" value="2011-08" id="example-month-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-week-input" className="col-2 col-form-label">Week</label>
                                    <div className="input">
                                        <input className="form-control" type="week" value="2011-W33" id="example-week-input" />
                                    </div>
                                </div>
                                <div className="form-group inline">
                                    <label htmlFor="example-time-input" className="col-2 col-form-label">Time</label>
                                    <div className="input">
                                        <input className="form-control" type="time" value="13:45:00" id="example-time-input" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Backend>
        );
    }
}
