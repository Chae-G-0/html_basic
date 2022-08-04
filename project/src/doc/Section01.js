

const Section01 = () => {
    return (
        <section className="about basicSection">
            <h2>
                <span className="mainColor">CEO's</span>GREETINGS
            </h2>
            <p>새로운 미래를 열어가는 채가</p>
            <div className="container">
                <div className="des">
                    <p className="title">
                        웹서비스의 <span className="mainColor">새로운 미래</span>
                        <br />
                        <span className="mainColor">채가</span>가 만들어 가겠습니다.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Mollitia temporibus consequatur debitis quibusdam rem sit <br />
                        natus saepe ut possimus autem!
                    </p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Tempore iste corrupti, obcaecati, voluptates commodi beatae <br />
                        quo quaerat atque exercitationem ducimus quisquam quis
                        <br />
                        debitis laudantium nesciunt.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Sit soluta error, debitis necessitatibus ducimus possimus.
                    </p>

                    <p>채가 임직원 일동</p>
                </div>
                <figure>
                    <img src="./img/hd01.jpg" alt="" />
                </figure>
            </div>
            <div className="inner">
                <h3>주요현황</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>주 소</th>
                            <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>051 - 783 - 2317</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Section01;
