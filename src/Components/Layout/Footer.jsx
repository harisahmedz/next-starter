import React from 'react'
import styles from "@/styles/Footer.module.css";
import Link from 'next/link';

const Link1 = [
    { title: 'Projects', link: '/' },
    { title: 'FGEHA', link: '/FGEHA' },
    { title: 'RABI CENTER', link: '/rabi-center' },
    { title: 'ICON 1', link: '/icon1' },
    { title: 'DENCLAVE', link: '/d-enclave' },
    { title: 'JBR RESIDENCY', link: '/jbr-residency' },
]

const Link2 = [
    { title: 'Contact Us', link: '/contact' },
    { title: 'FAQ’s', link: '/contact' },
    { title: 'Register with us', link: '/register' },
    { title: 'About', link: '/about' },
    { title: 'Privacy Policy', link: '/' },
    { title: 'Dealers', link: '/dealers' },

]
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container-lg'>
                <div className={`row ${styles['footer-main']} align-items-center`}>
                    <h1>Subscribe</h1>
                    <div className={`col-12 col-sm-7 ${styles.border}`}>
                        <div className={styles.main}>

                            <p>Stay informed with our latest articles on real estate investment strategies, industry insights, and market trends, along with occasional updates on our projects and company news.</p>
                            <div className=''>
                                <div className="position-relative">
                                    <input name="Subscribe" id="Subscribe" type="email" value="" className="large" placeholder="Email Address" aria-invalid="false" />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                          
                            <h6>By submitting this form, you agree to receive emails from D Group and its subsidiaries. For more details, please refer to our privacy policy.</h6>
                        </div>
                    </div>
                    <div className={`col-12 col-sm-5 justify-content-center`}>
                        <div className='row pt-1 ps-0 ps-sm-5'>
                            <div className={`col-6`}>
                                <div className='d-flex flex-column'>
                                    {
                                        Link1.map((item, i) => <Link href={item.link} className={styles.link} key={i}>{item.title}</Link>)
                                    }
                                </div>
                            </div>
                            <div className={`col-6`}>
                                <div className='d-flex flex-column'>
                                    {
                                        Link2.map((item, i) => <Link href={item.link} className={styles.link} key={i}>{item.title}</Link>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Footer */}
                <div className={styles['footer-bottom']}>
                    <div className='d-flex flex-md-nowrap flex-wrap justify-content-md-between justify-content-center align-items-center'>
                        <p className='mb-2 mb-md-0'>© 2024 D Group, LLC. . All Rights Reserved.</p>
                        <div className='d-flex align-items-center'>

                            <span className={styles['phone-number']}>0333-366-5306</span>
                            <div className={` ${styles["social-links"]}`}>
                                <Link href='https://www.facebook.com/DPropertiesOfficial1/' target='_blank' className={styles.icon1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="#00bcd4" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z" />
                                    </svg>
                                </Link>
                                <Link href='https://www.instagram.com/dproperties_official/' target='_blank' className={styles.icon1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g fill="none" stroke="#00bcd4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link href='https://www.youtube.com/@D-Properties' target='_blank' className={styles.icon1}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.16 172.72"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill="#00bcd4" d="M238.16,85.61c0-.58,0-1.24,0-2,0-2.15-.08-4.57-.13-7.15-.21-7.41-.59-14.8-1.17-21.76a142.93,142.93,0,0,0-3.56-23.61A37.09,37.09,0,0,0,207.14,4.89c-7.52-2-22.25-3.27-43-4-9.86-.37-20.41-.61-31-.74C129.5.05,126.07,0,123,0h-7.82c-3.08,0-6.51.05-10.21.11C94.41.24,83.86.48,74,.85c-20.73.8-35.49,2.05-43,4A37,37,0,0,0,4.89,31.07c-1.62,6-2.76,14-3.56,23.61C.74,61.64.37,69,.16,76.44.08,79,.05,81.44,0,83.59c0,.78,0,1.44,0,2V87.1c0,.59,0,1.25,0,2,0,2.16.08,4.57.13,7.15.21,7.42.58,14.81,1.17,21.77a142.93,142.93,0,0,0,3.56,23.61A37.06,37.06,0,0,0,31,167.83c7.49,2,22.25,3.27,43,4,9.86.37,20.41.61,31,.74,3.7,0,7.13.08,10.21.11H123c3.08,0,6.51-.06,10.2-.11,10.56-.13,21.11-.37,31-.74,20.73-.8,35.48-2.05,43-4a37,37,0,0,0,26.13-26.18c1.62-6,2.76-14,3.56-23.61.58-7,1-14.35,1.17-21.77.08-2.58.1-5,.13-7.15,0-.77,0-1.43,0-2V85.61ZM219,87c0,.55,0,1.17,0,1.88,0,2.08-.08,4.36-.13,6.84-.19,7.07-.56,14.14-1.12,20.7a125.86,125.86,0,0,1-3,20.28,17.9,17.9,0,0,1-12.6,12.63c-5.58,1.49-19.64,2.68-38.76,3.4-9.67.37-20.09.61-30.48.74-3.64.06-7,.08-10.05.08h-7.6l-10-.08c-10.39-.13-20.78-.37-30.49-.74-19.11-.74-33.2-1.91-38.75-3.4a18,18,0,0,1-12.6-12.63,126.81,126.81,0,0,1-3-20.28c-.55-6.56-.9-13.63-1.11-20.7-.08-2.48-.11-4.79-.14-6.84,0-.71,0-1.35,0-1.88V85.72c0-.56,0-1.17,0-1.89,0-2.07.08-4.36.14-6.83.18-7.07.56-14.14,1.11-20.7a126.81,126.81,0,0,1,3-20.28A17.9,17.9,0,0,1,36,23.39c5.58-1.49,19.64-2.68,38.75-3.4,9.68-.37,20.1-.61,30.49-.75,3.64,0,7-.08,10-.08h7.6l10.05.08c10.39.14,20.78.38,30.48.75,19.12.74,33.2,1.91,38.76,3.4A18,18,0,0,1,214.77,36a125.86,125.86,0,0,1,3,20.28c.56,6.56.91,13.63,1.12,20.7.08,2.47.11,4.79.13,6.83,0,.72,0,1.36,0,1.89ZM95.42,122l61.67-35.89L95.42,50.74Z"></path></g></g></svg></Link>
                                <Link href='https://www.facebook.com/DPropertiesofficial' target='_blank' className={styles.icon2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="#00bcd4" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z" />
                                    </svg>
                                </Link>
                                <Link href='https://wa.me/923333665306' target='_blank' className={styles.icon2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="#00bcd4" d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1" />
                                    </svg>
                                </Link>



                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer