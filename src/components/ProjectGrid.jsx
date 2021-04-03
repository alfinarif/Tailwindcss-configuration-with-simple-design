import React from "react";
import NavbarAndHeroSection from "./NavbarAndHeroSection";

export default function ProjectGrid () {
    return(

        <React.Fragment>
            <NavbarAndHeroSection/>
            <br/><br/>

            <div className="container mx-auto box-border h-140 w-140 p-4 border-2 shadow-2xl">
                <div className="mb-8">
                    <div className=" text-center text-4xl font-extrabold text-blue-700 italic ">CleaverCode Provide</div>
                    <div className="text-center text-1xltext-blue-400 italic">free tutorials to develop your skill's</div>
                </div>

                <div className="grid grid-cols-3 gap-4 ">

                    <div className="box-border h-140 w-140 p-4 border-2 rounded-lg flex flex-col shadow-lg">
                        <img className="inline" src="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png" alt="..."/>
                        <div className="mt-3 text-left text-2xl text-black ">CleaverCode Provide</div>
                        <p className="mt-2 leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
                        <div className="btn-group mt-2">
                            <button
                                className="bg-blue-200 hover:bg-blue-700 text-orange-400 font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                                View Details
                            </button>
                        </div>
                    </div>

                    <div className="box-border h-140 w-140 p-4 border-2 rounded-lg flex flex-col shadow-lg">
                        <img className="inline" src="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png" alt="..."/>
                        <div className="mt-3 text-left text-2xl text-black ">CleaverCode Provide</div>
                        <p className="mt-2 leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
                        <div className="btn-group mt-2">
                            <button
                                className="bg-blue-200 hover:bg-blue-700 text-orange-400 font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                                View Details
                            </button>
                        </div>
                    </div>

                    <div className="box-border h-140 w-140 p-4 border-2 rounded-lg flex flex-col shadow-lg">
                        <img className="inline" src="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png" alt="..."/>
                        <div className="mt-3 text-left text-2xl text-black ">CleaverCode Provide</div>
                        <p className="mt-2 leading-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
                        <div className="btn-group mt-2">
                            <button
                                className="bg-blue-200 hover:bg-blue-700 text-orange-400 font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                                View Details
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </React.Fragment>

    );
}