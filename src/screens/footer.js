import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                {/* <div className="input">
                    <p className="area2">Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
                    <input type="email" className="placeemail" placeholder="enter your email" />
                    <button className="buttonsubscribe">Subscribe</button>
                    <p className="area">We’ll never share your email address with a third-party.</p>
                </div> */}
                <div className="ul">
                    <ul className="li">
                        <li className="h1"><h3 className="Footerh3">Customer Services</h3></li>
                        <li className="lichild">Help Center</li>
                        <li className="lichild">Contact Us</li>
                        <li className="lichild">Report Abuse</li>
                        <li className="lichild">Submit a Dispute</li>
                        <li className="lichild">Policies & Rules</li>
                        <li className="lichild">Get Paid for Your Feedback</li>
                    </ul>
                    <ul className="li">
                        <li className="h1"><h3 className="Footerh3">About Us</h3></li>
                        <li className="lichild">About Alibaba.com</li>
                        <li className="lichild">About Alibaba Group</li>
                        <li className="lichild">Sitemap</li>
                    </ul>
                    <ul className="li">
                        <li className="h1"><h3 className="Footerh3">Source on Alibaba.com</h3></li>
                        <li className="lichild">Resources</li>
                        <li className="lichild">All Categories</li>
                        <li className="lichild">Request for Quotation</li>
                        <li className="lichild">Ready to Ship</li>
                        <li className="lichild">Buyer Partners</li>
                    </ul>
                    <ul className="li">
                        <li className="h1"><h3 className="Footerh3">Sell on Alibaba.com</h3></li>
                        <li className="lichild">Supplier Memberships</li>
                        <li className="lichild">Learning Center</li>
                        <li className="lichild">Partner Program</li>
                    </ul>
                    <ul className="li">
                        <li className="h1"><h3 className="Footerh3">Trade Services</h3></li>
                        <li className="lichild">Trade Assurance</li>
                        <li className="lichild">Business Identity</li>
                        <li className="lichild">Logistics Service</li>
                        <li className="lichild">Production Monitoring & Inspection Services</li>
                        <li className="lichild">Letter of Credit</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}