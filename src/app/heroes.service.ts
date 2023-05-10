import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class heroesService{

  privateKey: string = "bd446e14d8ce9533632197f5e0897a719a7f9f51"
  publicKey: string = "e078b63c0209d73f6df49a1477e7509e"
  hash:string = "c7e7c0e7f0b82ae28e7015513054cacc"
  ts: string = "1"
  
    
      constructor(private httpClient: HttpClient){
    
      }
      get():Observable<Array<any>>{
        return this.httpClient.get<Array<any>>(`https://gateway.marvel.com:443/v1/public/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}&limit=100`)

      }
}
