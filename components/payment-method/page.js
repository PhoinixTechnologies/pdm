import './payment-mthd.styles.scss'
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import visa from "../../public/assets/icons/visa_card_icon.png";
import mastercard from "../../public/assets/icons/master_card_icon.png";
import paypal from "../../public/assets/icons/paypal_card_icon.png";

const PaymentMethods = () => {
  const [selected, setSelected] = useState(null);

  const radioInputBox = (index) => {
    setSelected((prev) => (prev === index ? null : index));
  };
  

  return (
    <div className="cards">
      {[
        { icon: visa, text: "4855 **** **** ****", subText: "04/24", name: "Vako Shvili" },
        { icon: mastercard, text: "5795 **** **** ****", subText: "04/24", name: "Vako Shvili" },
        { icon: paypal, text: "You will be redirected to the PayPal site after reviewing your order." },
        { icon: faCreditCard, text: "New Payment Cards", isFontAwesome: true }
      ].map((item, index) => (
        <div key={index} className={`each ${selected === index ? "selected" : ""}`}
          onClick={() => radioInputBox(index)}
        >
          {item.isFontAwesome ? (
            <FontAwesomeIcon icon={item.icon} />
          ) : (
            <Image src={item.icon} alt="payment method icon" />
          )}
          <p> {item.text} </p>
          {item.subText && <p> {item.subText} </p>}
          {item.name && <p> {item.name} </p>}
          {index < 2 && <input type="radio" name="visa-card-payment-methd" checked={selected === index} readOnly />}
        </div>
      ))}
      <style jsx>
        {`
        .cards {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .each {
          padding: 10px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }
        .each.selected {
          border-color: blue;
        }
      `}</style>
    </div>
  );
};

export default PaymentMethods;
