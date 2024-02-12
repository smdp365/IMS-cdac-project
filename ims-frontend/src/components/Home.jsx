import styles from "../css/Home.module.css";

export default function Home() {
    return (
        <div className={`${styles.container}`}>
            {/* first row */}
            <div className={`${styles.firstRow} row`}>
                <div className={`${styles.firstRowCol} col-sm-12`}>
                    <h4>
                        Everyone is a buyer, everyone's a potential purchaser
                        and everyone's a potential vendor.
                    </h4>
                    <p className={`${styles.youDemand}`}>
                        - You demand : We supply
                    </p>
                </div>
            </div>

            {/* second row */}
            <div className={`${styles.secondRow} row`}>
                <div className={`${styles.secondRowCol} col-sm-12`}>
                    <h3 className={`${styles.secondRowColHeading}`}>
                        Certification & Awards
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "30px",
                        }}
                    >
                        <div
                            className={`${styles.secondRowColCertificate}`}
                        ></div>
                        <div
                            className={`${styles.secondRowColCertificate}`}
                        ></div>
                        <div
                            className={`${styles.secondRowColCertificate}`}
                        ></div>
                        <div
                            className={`${styles.secondRowColCertificate}`}
                        ></div>
                    </div>
                </div>
            </div>

            {/* third row */}
            <div className="row" style={{ backgroundColor: "#023E8A", color: "#FFFFFF", padding:"2%", height:"100px" }}>
                <h3>Our Products</h3>
            </div>
            <div className={`${styles.thirdRow} row`}>
                <div className={`${styles.thirdRowCol} col-sm-12`}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "20px",
                        }}
                        className={`${styles.forthRowCol} col-sm-12`}
                    >
                        <div className={`${styles.thirdRowColProduct}`}></div>
                        <div className={`${styles.thirdRowColProduct}`}></div>
                        <div className={`${styles.thirdRowColProduct}`}></div>
                        <div className={`${styles.thirdRowColProduct}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
