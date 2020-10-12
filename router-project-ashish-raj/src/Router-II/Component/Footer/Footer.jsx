import React, { PureComponent } from 'react'
import {Container} from "./StyledComponent"
import styles from "./footer.module.css"

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <>
            <Container>
                <div className={styles.footer}>
                    <div>
                        <h5>ABOUT US</h5>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Flipkart Stories</p>
                        <p>Press</p>
                        <p>Flipkart Wholesale</p>
                    </div>
                    <div>
                        <h5>HELP</h5>
                        <p>Payments</p>
                        <p>Shipping</p>
                        <p>Cancellation & Returns</p>
                        <p>FAQ</p>
                        <p>Report Infringement</p>
                        </div>
                    <div>
                        <h5>POLICY</h5>
                        <p>Return Policy</p>
                        <p>Terms Of Use</p>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>Sitemap</p>
                        <p>EPR Compliance</p>
                    </div>
                    <div>
                        <h5>SOCIAL</h5>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Youtube</p>
                    </div>
                    <div>
                        <h5>Mail Us:</h5>
                        <p>Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,
                        Karnataka, India</p>
                    </div>
                    <div>
                        <h5>Registered Office</h5>
                        <p>Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,
                        Karnataka, India
                        CIN : U51109KA2012PTC066107
                        Telephone: 1800 208 9898</p>
                    </div>
                </div>
            </Container>
            </>
        )
    }
}
export default Footer