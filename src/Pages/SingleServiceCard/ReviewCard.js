import React, { useContext } from "react";
import { FaCalendar, FaStar } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ReviewCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-10">
      <div className="">
        <div className="flex items-center mb-5">
          <div>
            <img
              className="w-14 rounded-full mr-4"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className="">
            <div className="flex">
              <p>
                by : <span className="font-bold">{user?.displayName}</span>
              </p>
              <div className="flex items-center ml-2">
                <p>
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p>
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p>
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p>
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
                <p>
                  <FaStar className="text-yellow-400"></FaStar>
                </p>
              </div>
            </div>
            <p className="flex items-center">
              <FaCalendar className="mr-2 text-orange-500"></FaCalendar>
              December 14, 2022 | 12.23 pm
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit
          eaque corporis quibusdam quos illo natus excepturi omnis repudiandae
          earum! Perferendis, similique? Repellat, iusto ducimus doloribus velit
          rerum quibusdam dignissimos veritatis vero fuga nihil fugit recusandae
          voluptatem, illum alias inventore deserunt eligendi voluptas
          repellendus tempore nulla cumque. Recusandae, inventore excepturi
          totam quam necessitatibus deleniti maiores, eveniet dolores, quas
          officiis tenetur. Reprehenderit cupiditate natus, error quaerat
          doloremque nulla ea dolore voluptatibus. Ex adipisci ratione quas
          magni, excepturi atque aspernatur eligendi ullam doloremque cumque
          dicta cum recusandae neque maiores fugiat eius distinctio dolor
          repellat! Iusto itaque temporibus similique, voluptatem aliquid facere
          quod consectetur maiores libero voluptas quasi eveniet et aspernatur
          ad quo at odit velit natus veniam blanditiis laborum voluptatum qui?
          Sapiente delectus sint non. Architecto distinctio modi pariatur animi
          harum, dolorem obcaecati sed quos id ipsa magni inventore error.
          Consequatur perspiciatis culpa eligendi at eveniet, animi provident
          perferendis, libero nam numquam voluptatum id labore voluptatem
          tempore omnis magni? Quis quasi officia neque praesentium ab
          architecto perspiciatis obcaecati dolorem minima aspernatur ipsam
          provident quisquam voluptatum blanditiis voluptatem nemo qui ut
          accusantium in aliquam, nihil fugit illum? Suscipit dignissimos,
          asperiores porro inventore doloribus eveniet ut a! Molestiae velit
          exercitationem aspernatur maxime voluptatum unde.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
