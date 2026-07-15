import React, { useState } from "react";

function Flames() {
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [answer, setAnswer] = useState("");

  function flameslogic() {
    

    let n1 = firstname.toLowerCase().split("");
    let n2 = secondname.toLowerCase().split("");

    for (let i = 0; i < n1.length; i++) {
      for (let j = 0; j < n2.length; j++) {
        if (n1[i] === n2[j]) {
          n1.splice(i, 1);
          n2.splice(j, 1);
          i--;
          break;
        }
      }
    }

    let wordcount = n1.length + n2.length;

    const flames = [
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
      "Siblings",
    ];

    let remainder = wordcount % flames.length;

    if (remainder === 0) {
      setAnswer(flames[flames.length - 1]);
    } else {
      setAnswer(flames[remainder - 1]);
    }
  }

  function clearFields() {
    setFirstName("");
    setSecondName("");
    setAnswer("");
  }

  return (
    <div>
      <input
        type="text"
        value={firstname}
        data-testid="input1"
        name="name1"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        value={secondname}
        data-testid="input2"
        name="name2"
        placeholder="Second Name"
        onChange={(e) => setSecondName(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={flameslogic}
        data-testid="calculate_relationship"
        name="calculate_relationship"
      >
        Calculate Relationship Future
      </button>

      <button onClick={clearFields} data-testid="clear" name="clear">
        Clear
      </button>

      <h3>{answer}</h3>
    </div>
  );
}

export default Flames;
