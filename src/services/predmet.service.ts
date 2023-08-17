import type Predmet from "@/models/predmet.model";
import axios from "axios";
export default {

    async getAllPredmets(){
        return await axios.get<Predmet[]>("http://localhost:4000/api/predmet");

    },

    async getPredmetById(id: number){
        return await axios.get<Predmet>("http://localhost:4000/api/predmet/" + id);
    },
    async getPredmetWhereESPB(espb:number){
        return await axios.get<Predmet>("http://localhost:4000/api/predmet/espb/"+ espb)

    },
    
    async createPredmet(name:string, espb: number){
        return await axios.post<Predmet>("http://localhost:4000/api/predmet/", {
            
            name: name,
            espb: espb
        });
    },

    async updatePredmet(id: number, name: string, espb:number){
        return await axios.put<Predmet>("http://localhost:4000/api/predmet/" + id, {
            name : name,
            id: id,
            espb: espb,
        });
    },
    async deletePredmet(id:number){
        return await axios.delete<Predmet>("http://localhost:4000/api/predmet/" + id);
    }
}