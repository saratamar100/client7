import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const TableSize = () => {
  useEffect(() => {
    document.title = "מידות";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  return (
    <main>
      <section id="size_table">
        <div>
          <h2>המרת מידות נעליים</h2>
          <table className="table">
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
          <table className="table">
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
  );
};
export default TableSize;
