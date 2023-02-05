import Image from "next/image";
import React from "react";
import Image1 from "../../Media Asset/Image01.png";
import Image2 from "../../Media Asset/Image02.png";
import Image3 from "../../Media Asset/Image03.png";
import Image4 from "../../Media Asset/Image04.png";
import Image5 from "../../Media Asset/Image05.png";
import Brush from "../../Media Asset/Brush.png";

const Article = () => {
  return (
    <div>
      <div className='brush w-[100vw] mx-auto relative'>
        <Image className='ml-[30vw]' src={Brush} alt={""}></Image>
        <h3 className='text-3xl text-blue-700 text-center absolute top-3 left-[40vw]'>
          Ash & Pikachu Arrive in <br />
          Pokémon Universe
        </h3>
      </div>

      <div className='flex gap-2 bg-slate-50'>
        {/* first */}
        <section className='w-[45vw]'>
          <p className='text-xl font-semibold text-black text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repellat aspernatur modi odio quo doloremque cupiditate dolor veniam
            possimus porro, necessitatibus ipsum labore explicabo praesentium
            consectetur neque suscipit sapiente quae amet sequi optio nobis!
            Beatae quos vitae corporis quibusdam ab dolore illum deleniti
            consectetur possimus molestias quam, eaque nisi! Molestias!
          </p>
          <section>
            <div>
              <div className='flex'>
                <p className='text-xl font-semibold text-black my-2 text-justify p-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus repellat aspernatur modi odio quo doloremque
                  cupiditate dolor veniam possimus porro, necessitatibus ipsum
                  labore explicabo praesentium consectetur neque suscipit
                  sapiente quae amet sequi
                </p>
                <Image className='p-2 h-52' src={Image4} alt={""}></Image>
              </div>
              <p className='text-xl font-semibold text-black text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                eum adipisci quidem, aperiam laudantium modi natus odit deleniti
                molestias unde dicta placeat ab, corrupti sit suscipit quo
                similique? Similique, sapiente accusamus! Sapiente impedit
                beatae id totam quisquam, dolor ea repudiandae optio cupiditate
                consectetur dolores? Veniam repellendus culpa cum maxime libero!
              </p>
            </div>
          </section>
        </section>
        <div className='flex flex-col mt-16'>
          <Image className='p-1 h-52' src={Image3} alt={""}></Image>
          <Image className='p-1 h-52' src={Image2} alt={""}></Image>
        </div>
        {/* second div */}
        <section className='w-[45vw]'>
          <p className='text-xl font-semibold text-black text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat
            numquam eligendi? Quod dolore minima vero in suscipit odit iste,
            officiis magni vel quisquam dicta deserunt, libero mollitia, ratione
            culpa.
          </p>
          <div className='flex'>
            <Image className='p-1 h-52' src={Image5} alt={""}></Image>
            <p className='text-xl font-semibold text-black text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              fugiat numquam eligendi? Quod dolore minima vero in suscipit odit
              iste, officiis magni vel quisquam dicta deserunt, libero mollitia,
              ratione culpa.
            </p>
          </div>
          <div className='flex'>
            <Image className='p-1 h-52' src={Image5} alt={""}></Image>
            <p className='text-xl font-semibold text-black text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              fugiat numquam eligendi? Quod dolore minima vero in suscipit odit
              iste, officiis magni vel quisquam dicta deserunt, libero mollitia,
              ratione culpa.
            </p>
          </div>
          <div>
            <p className='text-xl font-semibold text-black text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam voluptas atque modi nam, fugiat, totam iste praesentium laudantium dolorum natus consectetur, ex officia veniam illum laboriosam. Perferendis mollitia ea cupiditate. Praesentium vel quos quibusdam veniam aliquam! Rem aliquam optio earum adipisci soluta totam molestiae deleniti deserunt neque enim assumenda, provident animi magnam quos unde praesentium necessitatibus perspiciatis, accusamus officia et dolorem sapiente quaerat! Excepturi ad non sequi voluptatibus quidem?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Article;
