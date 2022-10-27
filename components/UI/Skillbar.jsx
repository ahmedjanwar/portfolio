import React from 'react'

import { Progress } from "@material-tailwind/react";

function Skillbar() {

        return (
            <div className='pt-2 pb-2'>
                 {/**------------------------------------- */}
                <span className='text-white'>HTML/CSS</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    {/**------------------------------------- */}
                    <span className='text-white'>TypeScript</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "88%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">88%</div>
                    </div>
                     {/**------------------------------------- */}

                     <span className='text-white'>ReactJS</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                     {/**------------------------------------- */}
                     <span className='text-white'>Angular</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                     {/**------------------------------------- */}

                     <span className='text-white'>Git/GitHub</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">98%</div>
                    </div>
                     {/**------------------------------------- */}

                     <span className='text-white'>Python</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                     {/**------------------------------------- */}

                     <span className='text-white'>Linux</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
                     {/**------------------------------------- */}
            </div>
        );


}

export default Skillbar