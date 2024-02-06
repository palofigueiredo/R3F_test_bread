import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

// Section is our React component. Here we use 'prs' as a stand-in name for the component itself, or the way to identify 'props' that will be passed down to it when it's called in the actual 'return()' for the JSX


export const sectionQnt=3;

const Section = (prs) => {
    
    return(
        <section 
        itemID="OverlaySection"
        className={`h-screen flex flex-col justify-center p-10 `}
        style={{height:'100vh', width:'100vw', display:'flex',flexDirection:'column',justifyContent: 'center', padding:'10px'}}
        style={{opacity:prs.opacity}
        }
        >
            <div 
            itemID="OverlayFirstDiv" 
            className="w-1/2 flex items-center justify-center"
            style={{width:'1/2vw', height: '100vh' , display:'flex', justifyItems:'center', alignItems:'center', backgroundColor:'#dd000055'}}>
                <div 
                itemID='OverlaySecondDiv'  
                className="max-w-sm w-full"
                style={{maxWidth:'24rem',width:'100%'}}
                >
                    <div 
                    itemID="OverlayThirdDiv" 
                    className="bg-white rounded-lg px-8 py-12"
                    style={{backgroundColor:'white', borderRadius:'0.5rem',padding:'2rem 3rem'}}>
                        {prs.children}
                    </div>
                </div>
            </div>

        </section>
    );
}

export const Overlay = () =>{

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);
    const [opacityFourthSection, setOpacityFourthSection] = useState(1);

    console.log(scroll.offset);

    useFrame(() =>{
        // setOpacityFirstSection(1-scroll.range(0,1/sectionQnt));
        setOpacityFirstSection(scroll.curve(0,0,1/(sectionQnt*2)));
        setOpacitySecondSection(scroll.curve(1/sectionQnt, 0,1/(sectionQnt*2)));
        setOpacityThirdSection(scroll.curve(2/sectionQnt,0,1/(sectionQnt*2)));
        setOpacityFourthSection(scroll.curve(3/sectionQnt,0,1/(sectionQnt*2)));
    }
    );


    return (
        <Scroll html>
            
            <div className="w-screen">
                < Section opacity={opacityFirstSection}>
                <h1 className='font-semibold font-serif text-2xl' >Hello, World!</h1>
                <p className="text-gray-500">This is a simple text</p>
                </Section >

                <Section right opacity={opacitySecondSection} >
                <h1 className='font-serif text-2xl' >Hello, World P2</h1>
                <p className="text-gray-500">
                    This is the second text box
                </p>
                
                

                </Section >

                < Section opacity={opacityThirdSection} >
                <h1 className='font-serif text-2xl' >Hello, World P3</h1>
                <p className="text-gray-500">
                    Third one.
                </p>
                

                </Section >

                < Section opacity={opacityFourthSection}>
                <h1 className='font-serif text-2xl' >Section 4</h1>
                <p className="text-gray-500">
                    And this is the last one.
                </p>
                </Section>
            
            </div>
        </Scroll>
    
    );
}