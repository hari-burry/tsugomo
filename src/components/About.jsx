import '../index.css';
import img1 from '../assets/1.jpg';
import { Fade } from 'react-awesome-reveal';
function About(){
   

    return(
     <div className='bg-black min-h-[91vh] pt-3'>
        <h1 className='w-max font-mono mx-auto  text-white text-2xl animate-gapout mb-3'>TECHNIQUES USED</h1>
        <div className=' animate-fadeIn border-[#444444] p-4 rounded-lg bg-[#444444] w-max mx-auto'>
        <img  className='h-[400px] mx-auto rounded-md'src={img1}></img> 
        </div>
        <Fade>
        <div className=' mt-10 mx-auto w-[85vw]   '>
          <pre className='tracking-wide text-white  font-Lexend text-lg text-wrap'>
          <h2 className=' text-2xl font-bold'>(b) Histogram Equalization (Global Equalization)</h2>  
          <h2 className='underline underline-offset-2 font-semibold'>How It Works :</h2>
          Enhances the contrast by stretching the range of pixel intensity across the entire image.
          The Histogram of the entire image is flattened and distributed uniformly.
         <h2 className=' underline underline-offset-2  font-semibold'>So why choose another method ?</h2>
         It Lacks localized control. CLAHE or Adaptive Histogram Equalization would be better because
          they focus on enhancing contrast locally(in small regions),which is more useful when
          dealing with highly varied images like lunar PSG images where both dark and bright regions
          coexist.  
          </pre>  
        </div>
        <div className=' mt-10 mx-auto w-[85vw] '>
          <pre className='tracking-wide text-white  font-Lexend text-lg text-wrap'>
          <h2 className=' text-2xl font-bold'>(c) CLAHE (Contrast Limited Adaptive Histogram Equalization)</h2>  
          <h2 className='underline underline-offset-2 font-semibold'>How It Works :</h2>
          Divides the image into small tiles (regions) and applies histogram equalization to each tile separately.
           It also limits the contrast enhancement to prevent over-amplification of noise.
         <h2 className=' underline underline-offset-2  font-semibold'>So why choose another method ?</h2>
         For Natural Appearance: If the goal is to achieve a smoother, more natural-looking enhancement without noise or blocky effects, simpler methods like Global Histogram Equalization or Adaptive Histogram Equalization with less contrast limitation might work better.  
          </pre>  
        </div>
        <div className=' mt-10 mx-auto w-[85vw] '>
          <pre className='tracking-wide text-white  font-Lexend text-lg text-wrap'>
          <h2 className=' text-2xl font-bold'>(d) Adaptive Histogram Equalization (Without CLAHE)</h2>  
          <h2 className='underline underline-offset-2 font-semibold'>How It Works :</h2>
          Similar to CLAHE but does not limit the contrast enhancement in each region. 
          Each small region's histogram is equalized independently, providing localized contrast enhancement.
         <h2 className=' underline underline-offset-2  font-semibold'>So why choose another method ?</h2>
         Better Control of Contrast: CLAHE is typically preferred over adaptive histogram equalization because it limits contrast in a way that avoids the excessive enhancement of noise and small variations. 
         For sensitive applications like PSR images, CLAHE would be a better choice to maintain a balance between detail and noise suppression.<br/><br/>
         since CLAHE is more suitable for psr to snr image conversion, we stacked CLAHE algorithm with various functionality such as masking ,bitwise functions to overcome the disadvantage of using CLAHE alone and get rid of gray stripes.
        </pre>  
        </div>
          </Fade>
        </div>


    )
}

export default About