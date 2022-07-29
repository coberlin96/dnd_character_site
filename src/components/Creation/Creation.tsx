import { getAllJSDocTags } from "typescript"
import { getEnvironmentData } from "worker_threads"
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

import { characterServerCalls, classesServerCalls, subclassesServerCalls, statsServerCalls, skillsServerCalls } from "../../api/server"

interface CharacterFormProps{
    id?:string;
    data?:{}
}

export const Creation=(props:CharacterFormProps)=>{

    const{register, handleSubmit} = useForm()

    let getCharacterAssets = async (id:string) =>{
        let response = await characterServerCalls.get(id)
        return response
    }
    
    let updateStats = async(charId:string, data:any={} ) =>{
        let char = await getCharacterAssets(charId)
       let statsId = char.stats
       statsServerCalls.update(statsId, data)
    }

    let updateCharacter = async(id:string, data:any={})=>{
        characterServerCalls.update(id, data)
    }


    let updateClasses = async(charId:string, data:any={} ) =>{
        let char = await getCharacterAssets(charId)
        let classId = char.classes
        classesServerCalls.update(classId, data)
    }


    let makeStats = async (existingId:string="") =>{
        let str = Number((document.getElementById('str') as HTMLInputElement).value)
        let dex = Number((document.getElementById('dex') as HTMLInputElement).value)
        let con = Number((document.getElementById('con') as HTMLInputElement).value)
        let int = Number((document.getElementById('int') as HTMLInputElement).value)
        let wis = Number((document.getElementById('wis') as HTMLInputElement).value)
        let cha = Number((document.getElementById('cha') as HTMLInputElement).value)

        let race = (document.getElementById('race') as HTMLInputElement).value

        if (race == "dragonborn"){
            str = str + 2
            cha = cha + 1
        }else if (race == "dwarf"){
            con = con+ 2
        }else if (race == "elf"){
            dex = dex+ 2
        }else if (race == "gnome"){
            int = int+ 2
        }else if (race == "half-elf"){
            cha = cha + 2
        }else if (race == "half-orc"){
            str = str + 1
            con = con+ 1
        }else if (race == "halfling"){
            dex = dex+ 2
        }else if (race == "human"){
            str = str+ 1
            dex = dex+ 1
            con = con+ 1
            int = int+ 1
            wis = wis+ 1
            cha = cha+ 1
        }else if (race == "tiefling"){
            cha = cha+ 2
        }

        let input = {"str": str,
                    "dex": dex,
                    "con": con,
                    "int": int,
                    "wis": wis,
                    "cha": cha,
                    }
        
        let response = existingId
        if(existingId!=""){
            let id = await statsServerCalls.create(input)
            response = id.id
        }else{
            await updateStats(existingId, input)
            
        }
                    
        return response 
    
    }
    
    let makeClasses = async(existingId:string="") =>{
        let art=null, barb=null, bard=null, cle=null, dru=null, fig=null, mon=null, pal=null, ran=null, rog=null, sor=null, war=null, wiz=null

        if ((document.getElementById('class1') as HTMLInputElement).value == "art"){
            art = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "barb"){
            barb = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "bard"){
            bard = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "cle"){
            cle = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "dru"){
            dru = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "fig"){
            fig = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "mon"){
            mon = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "pal"){
            pal = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "ran"){
            ran = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "rog"){
            rog = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "sor"){
            sor = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "war"){
            war = Number((document.getElementById('level1') as HTMLInputElement).value)
        }else if((document.getElementById('class1') as HTMLInputElement).value == "wiz"){
            wiz = Number((document.getElementById('level1') as HTMLInputElement).value)
        }
        if ((document.getElementById('level2') as HTMLInputElement).value != "0"){
            if ((document.getElementById('class2') as HTMLInputElement).value == "art"){
                art = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "barb"){
                barb = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "bard"){
                bard = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "cle"){
                cle = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "dru"){
                dru = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "fig"){
                fig = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "mon"){
                mon = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "pal"){
                pal = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "ran"){
                ran = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "rog"){
                rog = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "sor"){
                sor = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "war"){
                war = Number((document.getElementById('level2') as HTMLInputElement).value)
            }else if((document.getElementById('class2') as HTMLInputElement).value == "wiz"){
                wiz = Number((document.getElementById('level2') as HTMLInputElement).value)
            }
        }
        let input = {"art":art,"barb":barb,"bard":bard,"cle":cle,"dru":dru,"fig":fig,"mon":mon,"pal":pal,"ran":ran,"rog":rog,"sor":sor,"war":war,"wiz":wiz}
        let response = existingId
        if(existingId!=""){
            let id = await characterServerCalls.create(input)
            response = id.id
        }else{
            await updateClasses(existingId, input)
        }
        return response
    }

    let onSubmit = async(props:CharacterFormProps) =>{
               
        if(props.id!){
            let stats = await makeStats()
            let classes = await makeClasses()

            let input = {"name": (document.getElementById('name') as HTMLInputElement).value,
                        "stats": stats,
                        "classes": classes,
                        "race": (document.getElementById('race') as HTMLInputElement).value,
                        "subrace": null,
                        "background": "tjFiqeD4Vlqs38XxISvYJXWh2Y25YRlluk9L9nazPtU"}
            await characterServerCalls.create(input)
        } else{
            let values = await getCharacterAssets(props.id!)
            await makeStats(values.stats)
            await makeClasses(values.classes)
            let input = {"name": (document.getElementById('name') as HTMLInputElement).value,
                        "stats": values.stats,
                        "classes": values.classes,
                        "race": (document.getElementById('race') as HTMLInputElement).value,
                        "subrace": null,
                        "background": "tjFiqeD4Vlqs38XxISvYJXWh2Y25YRlluk9L9nazPtU"}
            await updateCharacter(props.id!, input)
        }
        return "5"
        
    }


    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                {/* Name */}
                <p>What is your character's name?</p>
                <input type="text" name="name" id="name" required maxLength={30}/>
            </div>
            <div>
                {/* races */}
                <p>Select your character's race</p>
                <p>stat bonuses from race will be applied automatically</p>
                <form action="/action_page.php">
                    <label htmlFor="race">choose a race</label>
                    <select name="race" id="race">
                        <option value="dragonborn">Dragonborn(+2 Str, +1 Cha)</option>
                        <option value="dwarf">Dwarf(+2 Con)</option>
                        <option value="elf">Elf(+2 Dex)</option>
                        <option value="gnome">Gnome(+2 Int)</option>
                        <option value="half-elf">Half-Elf(+2 Cha)</option>
                        <option value="half-orc">Half-Orc(+2 Str, +1 Con)</option>
                        <option value="halfling">Halfling(+2 Dex)</option>
                        <option value="human">Human(+1 to All)</option>
                        <option value="tiefling">Tiefling(+2 Cha)</option>
                    </select>
                </form>
            </div>
            <div>
                {/* ability scores */}
                <p>Set your character's ability scores</p>
                <form action="action_page.php">
                    <label htmlFor="strength">Strength:</label>
                    <input type="number" name="str" id="str" min="1" max="20"/>
                    <label htmlFor="dex">Dexterity:</label>
                    <input type="number" name="dex" id="dex" min="1" max="20"/>
                    <label htmlFor="con">Constitution:</label>
                    <input type="number" name="con" id="con" min="1" max="20"/>
                    <label htmlFor="int">Intelegence:</label>
                    <input type="number" name="int" id="int" min="1" max="20"/>
                    <label htmlFor="wis">Wisdom:</label>
                    <input type="number" name="wis" id="wis" min="1" max="20"/>
                    <label htmlFor="cha">Charisma:</label>
                    <input type="number" name="cha" id="cha" min="1" max="20"/>
                </form>
            </div>
            
            <div>
                {/* class(es) */}
                <p>Choose your character's class.</p>
                <form action="/action_page.php">
                    <label htmlFor="class1">choose a class</label>
                    <select name="class1" id="class1">
                        <option value="art">artificer</option>
                        <option value="barb">barbarian</option>
                        <option value="bard">bard</option>
                        <option value="cle">cleric</option>
                        <option value="dru">druid</option>
                        <option value="fig">fighter</option>
                        <option value="mon">monk</option>
                        <option value="pal">paladin</option>
                        <option value="ran">ranger</option>
                        <option value="rog">rogue</option>
                        <option value="sor">sorcerer</option>
                        <option value="war">warlock</option>
                        <option value="wiz">wizard</option>
                    </select>
                    <label htmlFor="level1">select the level</label>
                    <input type="number" name="level1" id="level1" min="1" max="20"/>
                    
                </form>
                <p>If your character is multiclassing, choose their second class.</p>
                <form action="/action_page.php">
                    <label htmlFor="class2">choose a class</label>
                    <select name="class2" id="class2">
                        <option value="art">artificer</option>
                        <option value="barb">barbarian</option>
                        <option value="bard">bard</option>
                        <option value="cle">cleric</option>
                        <option value="dru">druid</option>
                        <option value="fig">fighter</option>
                        <option value="mon">monk</option>
                        <option value="pal">paladin</option>
                        <option value="ran">ranger</option>
                        <option value="rog">rogue</option>
                        <option value="sor">sorcerer</option>
                        <option value="war">warlock</option>
                        <option value="wiz">wizard</option>
                    </select>
                    <label htmlFor="level2">select the level</label>
                    <input type="number" name="level2" id="level2" min="0" max="20"/>
                    
                </form>
            </div>
            <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}