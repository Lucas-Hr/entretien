import React,{ useState } from 'react';


const FormEntretien = () => {
    //style
    const container = {
        margin : '50px 0px',
        border : 'solid',
        borderWidth : '1px',
        borderRadius : '5px',
        borderColor : '#eaeaea',
        width : 500,
        padding : '30px 40px',
        boxShadow : '0px 5px 5px #d7d5d3',
       
    }

    const styleInput = {
        border : 0,
        background:'transparent',
        padding : '10px 10px',
        borderBottom : 'solid',
        borderColor: ' #d7d5d3',
        borderBottomWidth : '1px',
        display : 'block',
        margin : '20px 0px',
        width : '100%',
    }

    const styleButton = {
        marginTop : '10px',
        width : '100%',
        padding : '5px 0px',
        borderRadius : '5px',
        border : 'none',
        cursor : 'pointer',
        backgroundColor : 'grey',
        color : 'white'
    
    }

   
    const listRegion = [
        {id:1,nom:'Tana'},
        {id:2,nom:'Tamatave'},
        {id:3,nom:'Tulear'},
        {id:4,nom:'Fianarantsoa'},
        {id:5,nom:'Diego'}
    ]

    const listCommune = [
        {region:"Tana", commune:['Ambaravarankazo','Ambatolampy']},
        {region:"Tamatave",commune:['Marolambo','Mahanoro']},
        {region:"Tulear",commune:['Ihosy','Renohira']},
        {region:"Fianarantsoa",commune:['Isada','Ivory']},
        {region:"Diego",commune:['Cap Diego','Be Manondrobe']}
    ]

    const [inputs, setInputs] = useState({
        nom : '',
        prenom : '',
        region : 'Tana',
        commune : '',
        date : '',
    });


    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputs({...inputs, [name]: value})
    }

    const validate = (event) => {
        event.preventDefault();
        console.log('Nom : ',inputs.nom)
        console.log('Preom : ',inputs.prenom)
        console.log('Region : ',inputs.region)
        console.log('Commune : ',inputs.commune)
        console.log('Date : ',inputs.date)
    }

    return (
        <div style={container}>
            <h3 style={{textAlign : 'center', fontWeight : 'lighter',padding : '10px 0px'}}>Formulaire</h3>
            <div style={{display : 'flex', justifyContent : 'center'}}>
                <hr style={{width : '50%'}}/>
            </div>
            <form onSubmit={validate}> 
                <input type="text" placeholder='Nom' name="nom"  value={inputs.nom} onChange={handleChange} style={styleInput}/>
                <input type="text" placeholder='Prenom' name="prenom" value={inputs.prenom} onChange={handleChange} style={styleInput}/>
                <select value={inputs.region} onChange={handleChange} name='region' style={styleInput}>
                    {
                        listRegion.map((region) => {
                            return <option value={region.nom} key={region.id}>{region.nom}</option>
                        })
                    }
                </select>
                <select value={inputs.commune} name='commune' onChange={handleChange} style={styleInput}>
                    {
                        listCommune.map((communes) => {
                            if (inputs.region == communes.region){
                                return communes.commune.map((c,index) => (//maka anle anaran commune anatinle tableau commune []
                                    <option key={index}>{c}</option>
                                ))
                            }
                            
                        })
                    }
                </select>
                <input type="date" name="date" style={styleInput} onChange={handleChange}/>
                <input type="submit" value="Envoyer" style={styleButton}/>
            </form> 
            <div>
                
            </div>
        </div>
    )
}

export default FormEntretien;