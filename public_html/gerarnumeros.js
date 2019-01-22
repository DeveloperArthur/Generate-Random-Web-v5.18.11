function gerarnumeros(){
                var vet = [10];
                
                for(var i=0; i<10; i++){
                   vet[i] = Math.floor(Math.random() * 60 + 1);    
                } 
                
                for(var z=0; z<10; z++){
                    for(var y=0; y<10; y++){
                        if(z!==y){	
			    if(vet[z]===vet[y]){	
				gerarnumeros();			
			    }	
                        }
		    }
                }
                
                for (var k=0; k<10; k++){
                    for (var l=0; l<10; l++){
                        if (vet[k] < vet[l]){
                            var temp = vet[k];
                            vet[k] = vet[l];
                            vet[l] = temp;
                        }   
                    }    
                }
    
                alert("Numeros gerados:  "+vet[0]+" - "+vet[1]+" - "+vet[2]+" - "+vet[3]+" - "+vet[4]+" - "+vet[5]+" - "+vet[6]+" - "+vet[7]+" - "+vet[8]+" - "+vet[9]);
                exit(0);
                
            }

