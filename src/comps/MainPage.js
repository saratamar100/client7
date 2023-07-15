import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const MainPage = () => {
  const [shirts, setShirts] = useState([]);
  const [skirts, setSkirts] = useState([]);
  const [dresses, setDresses] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const pic =
    "data:image/jpeg;base64,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";
  useEffect(() => {
    let l = [
      {
        description: "חולצה יפה מאוד",
        cost: 56,
        img: pic,
      },
      {
        description: "חולצה יפה מאוד",
        cost: 5,
        img: pic,
      },
      {
        description: "חולצה יפה מאוד",
        cost: 5,
        img: pic,
      },
      {
        description: "חולצה יפה מאוד",
        cost: 5,
        img: pic,
      },
    ];
    setShirts(l);
    setSkirts(l);
  }, []);
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#shirts" className="nav__link">
              חולצות
            </a>
          </li>
          <li className="nav__item">
            <a href="#skirts" className="nav__link">
              חצאיות
            </a>
          </li>
          <li className="nav__item">
            <a href="#dresses" className="nav__link">
              שמלות
            </a>
          </li>
          <li className="nav__item">
            <a href="#shoes" className="nav__link">
              נעליים
            </a>
          </li>
          <li className="nav__item">
            <a href="#accessories" className="nav__link">
              אקססוריז
            </a>
          </li>
          <li className="nav__item">
            <a href="#size_table" className="nav__link">
              המרת מידות
            </a>
          </li>
          <li className="nav__item">
            <Link to="/login" className="nav__link">
              התחברות / הרשמה
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h2 id="shirts">חולצות:</h2>
        <section className="grid-container">
          {shirts.map((s) => (
            <div className="item">
              <img src={s.img} alt="" />
              <div className="description">
                <p>{s.description}</p>
              </div>
              <div className="item_cost">
                <p>{s.cost} ש"ח</p>
              </div>
              <div className="item_insert">
                <button>
                  הוסף לעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button>
                  הוסף למעודפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </section>

        <h2 id="skirts">חצאיות:</h2>
        <section className="grid-container">
          {skirts.map((s) => (
            <div className="item">
              <img src={s.img} alt="" />
              <div className="description">
                <p>{s.description}</p>
              </div>
              <div className="item_cost">
                <p>{s.cost} ש"ח</p>
              </div>
              <div className="item_insert">
                <button>
                  הוסף לעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button>
                  הוסף למעודפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </section>

        <h2 id="dresses">שמלות:</h2>
        <section className="grid-container">
          {dresses.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <div className="description">
                <p>d.description</p>
              </div>
              <div className="item_cost">
                <p>{d.cost} ש"ח</p>
              </div>
              <div className="item_insert">
                <button>
                  הוסף לעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button>
                  הוסף למעודפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </section>

        <h2 id="shoes">נעליים:</h2>
        <section className="grid-container">
          {shoes.map((s) => (
            <div className="item">
              <img src={s.img} alt="" />
              <div className="description">
                <p>{s.description}</p>
              </div>
              <div className="item_cost">
                <p>{s.cost} ש"ח</p>
              </div>
              <div className="item_insert">
                <button>
                  הוסף לעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button>
                  הוסף למעודפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </section>

        <h2 id="accessories">אקססוריז:</h2>
        <section className="grid-container">
          {accessories.map((a) => (
            <div className="item">
              <img src={a.img} alt="" />
              <div className="description">
                <p>{a.description}</p>
              </div>
              <div className="item_cost">
                <p>{a.cost} ש"ח</p>
              </div>
              <div className="item_insert">
                <button>
                  הוסף לעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button>
                  הוסף למעודפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </section>

        <section id="size_table">
          <div>
            <h2>המרת מידות נעליים</h2>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>אירופה וישראל</th>
                  <th>ארה&quot;ב וקנדה</th>
                  <th>אוסטרליה</th>
                  <th>אוסטרליה</th>
                  <th>יפן</th>
                  <th>מקסיקו</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>35</td>
                  <td>5</td>
                  <td>3.5</td>
                  <td>2.5</td>
                  <td>21</td>
                  <td>&#8211;</td>
                </tr>
                <tr>
                  <td>35.5</td>
                  <td>5.5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>21.5</td>
                  <td>&#8211;</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>6</td>
                  <td>4.5</td>
                  <td>3.5</td>
                  <td>22</td>
                  <td>&#8211;</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>6.5</td>
                  <td>5</td>
                  <td>4</td>
                  <td>22.5</td>
                  <td>&#8211;</td>
                </tr>
                <tr>
                  <td>37.5</td>
                  <td>7</td>
                  <td>5.5</td>
                  <td>4.5</td>
                  <td>23</td>
                  <td>&#8211;</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>7.5</td>
                  <td>6</td>
                  <td>5</td>
                  <td>23.5</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>38.5</td>
                  <td>8</td>
                  <td>6.5</td>
                  <td>5.5</td>
                  <td>24</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>8.5</td>
                  <td>7</td>
                  <td>6</td>
                  <td>24.5</td>
                  <td>5.5</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>9</td>
                  <td>7.5</td>
                  <td>6.5</td>
                  <td>25</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>9.5</td>
                  <td>8</td>
                  <td>7</td>
                  <td>25.5</td>
                  <td>6.5</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>10</td>
                  <td>8.5</td>
                  <td>7.5</td>
                  <td>26</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>10.5</td>
                  <td>9</td>
                  <td>8</td>
                  <td>27</td>
                  <td>7.5</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>12</td>
                  <td>10.5</td>
                  <td>9.5</td>
                  <td>28</td>
                  <td>9</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2>המרת מידות בגדים:</h2>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>מידה/מדינה</th>
                  <th>XS</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>2XL</th>
                  <th>3XL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ארה&quot;ב</td>
                  <td>0-2</td>
                  <td>4-6</td>
                  <td>8-10</td>
                  <td>12-14</td>
                  <td>16-18</td>
                  <td>20-22</td>
                  <td>24-26</td>
                </tr>
                <tr>
                  <td>סין</td>
                  <td>155-160</td>
                  <td>160-165</td>
                  <td>165-170</td>
                  <td>170-175</td>
                  <td>175-180</td>
                  <td>180-185</td>
                  <td>185-190</td>
                </tr>
                <tr>
                  <td>אוסטרליה</td>
                  <td>6-8</td>
                  <td>8-10</td>
                  <td>10-12</td>
                  <td>12-14</td>
                  <td>14-16</td>
                  <td>16-18</td>
                  <td>18-20</td>
                </tr>
                <tr>
                  <td>בריטניה</td>
                  <td>2-4</td>
                  <td>6-8</td>
                  <td>10-12</td>
                  <td>14-16</td>
                  <td>18-20</td>
                  <td>22-24</td>
                  <td>26-28</td>
                </tr>
                <tr>
                  <td>ישראל</td>
                  <td>30-32</td>
                  <td>34-36</td>
                  <td>38-40</td>
                  <td>42-44</td>
                  <td>46-48</td>
                  <td>50-52</td>
                  <td>54-56</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
