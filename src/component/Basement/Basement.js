import React from "react";
import './Basement.css';

const Basement = () => {
    return (
        <div className="guarantees-block">
            <h1 style={{ fontSize: "52px", paddingBottom: "20px" }}>ГАРАНТІЇ</h1>
            <ol className="guarantees-points">
                <li className="point">
                    Оплату приймаю через платіжну систему <span className="highlight">Назва*</span>, яка контролює<br />безпеку грошових переказів.
                </li>
                <li className="point">
                    Переконатися в моїй відповідальності та професіоналізмі можна <span className="highlight">написавши клієнтам</span>,<br />які залишили відгуки <span className="highlight">особисто</span> у будь-який момент (відгуки клієнтів вище).
                </li>
                <li className="point">
                    Всі <span className="highlight">авторські права</span> на роботу переходять замовнику після виконання замовлення.
                </li>
                <li className="point">
                    У своїх роботах використовую матеріали суворо <span className="highlight">дозволені для особистого<br />та комерційного використання</span>.
                </li>
            </ol>

            <div className="footer">Workford</div>
        </div>
    );
}

export default Basement;