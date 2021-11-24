
class Amin_Manipulator{
	constructor(item){
  		if(Boolean(item) && item.tagName != undefined){
	    		this.items = [item];
		}
		else{
			    this.items = document == item||item == window? 
			    [item] : document.querySelectorAll(item);
		}
		this.c 	   = this.items;
	}

	loaded(callback){

		  if(this.items == document || this.items == window){
			  	this.items[0].onloadend = callback;

				//return this;
		  }

		  for(let i=0; i<this.items.length; i++){
	 		    this.items[i].onload = callback;
	 	}
	}

   /* *
	* Get the name/tag of the item
	* */
	getName(){
		try{
			  return this.items[0].tagName;
		}catch(e){
        
		}
	}

   /* *
    * Get the internal html of this element
    * */
	getHtml(){
		    return this.items[0].innerHTML;
	}

	/* *
	 * Get the internal text of this item
	 * */
	 getText(){
	 	    return this.items[0].innerText;
	 }

	/* *
	 * Get the parent Tag for this item
	 * */
	 getParent(tagname = false, aminelement = false){
	 	  if(this.items.length < 1){
	 		    return false;
	 	  }
	 	  if(tagname) 
	 		  return this.items[0].parentNode.tagName;
	 	  else if(aminelement){
	 		  this.items = [this.items[0].parentNode];
	 		  return this;
	 	  }else{
	 	   return this.items[0].parentNode;
	 	}
	 }

	 getChildren(){
	 	  this.items = this.items[0].children;
	 	  return this;
	 }

    /* *
     * Set the text of this item
     * */
	 setText(text = "", item = false){
	 	    if(text.length < 1) 
	 		      return false;
	 	    if(item){
	 		      item.innerText = text;
	 		      return this;
	      }
	 	    for(let i=0; i<this.items.length; i++){
	 		  this.items[i].innerText = text;
	 	  }
	 	return this;
	 }

	 /* *
	  * Set the html of this item
	  * */
	  setHtml(html = ""){
	  	if(html.length < 1) 
	  		return false;
	  	for(let i=0; i<this.items.length; i++){
	 		this.items[i].innerHTML = text;
	 	}
	 	return this;
	  }

	  /* *
	   * Change the background of this item
	   * */
	   background(color = null){
	   	if(!color)
	   		return this.items[0].style.background;
	   	for(let i=0; i<this.items.length; i++){
	 		this.items[i].style.background = color;
	 	  }	
	 	  return this;   
	 	}

	   /* *
	    * Change the text color for this item
	    * */
	    color(color = null){
	    	if(!color)
	    		return this.items[0].style.color;

	    	for(let i=0; i<this.items.length; i++){
	 			this.items[i].style.color = color;
	 		}
	 		return this;
	    }

	    /* *
	     * Set the width of the items
	     * */
	     height(height = false){
	     	if(!height) return this.items[0].offsetHeight;
	     	for(let i=0; i < this.items.length; i++){
	     		this.items[i].style.height = height;
	     	}
	     	return this;
	     }

	     /* *
	      * Set the height of this item
	      * */
	      width(width = false){
	     	if(!width) return this.items[0].offsetWidth;
	     	for(let i=0; i < this.items.length; i++){
	     		this.items[i].style.width = width
	     	}
	     	return this;
	     }

	    resize(width, height){
	    	var width, height;

	    	width = this.width(width);
	    	height= this.height(height);
	    	return this;
	    }

	    getPopupHtml(v = ""){
	    	var html = "<h4 style='color:red;margin-top:0px;height:5px;";
	    	html 	 += "width:100%;top:0px;text-align:right'>";
	    	html 	 += "<span style='cursor:pointer'";
	    	html 	 += "onclick=this.parentNode.parentNode.removeAttribute('open')>";
	    	html 	 += "&times;</span></h4>";
	    	html 	 += "<p style='font-size:1.1em'>"+v+"</p>";
	    	return html;
	    }

	    createPopUp(v, color, bg){
	    	var ele 	= document.createElement("dialog"), style;
	     	ele.setAttribute("open", true);
	     	ele.innerHTML = this.getPopupHtml(v);
	     	style 	  	  = "width:30%;background:"+bg;
	     	style 	 	 += ";top:20px;border:0px solid black;";
	     	style 	 	 += "color:"+color+";padding-top:0px;";
	     	style 		 += "box-shadow:2px 2px 2px lightgrey;border-radius:5px";
	     
	     	ele.style 	  = style;

	     	return ele;
	    }

	    /* *
	     * Show the alert box
	     * */
	     popUp(what, v="", color = "#000000;", bg  = "#ffffff"){
	     	var e 	= "('"+v+"')";
 	 
	     	try{
	     		v = eval("this."+what+e);
	     	}catch(e){
	     		try{
	     			let i = document.querySelector(what);
	     			v = i.outerHTML;
	     		}catch(e){
	     			v = what;
	     		}
	     	}

	     	let p = this.createPopUp(v, color);

	     	
	     	document.body.appendChild(p);
	     	try{
	     		document.querySelector("dialog "+what).style.display="block";
	     	}catch(e){

	     	}
	     
	     	//alert(eval("this."+what+e));
	     }

	    /* *
	     * Add a class for this item
	     * */
	     delete(){
	     	this.items[0].parentNode.removeChild(this.items[0]);
	     	return this;
	     }

	     /* *
	      * Delete all the items for this class
	      * */
	      deleteAll(){
	      	for(let i=0; i<this.items.length; i++){
	      		this.items[i].parentNode.removeChild(this.items[i]);
	      		return this;
	      	}
	      }

}


class Element_Attributes extends Amin_Manipulator{
        constructor(item){
              super(item);
              this._tagName  = this.getName();
              this._id 	   = this.get("id")
              this._title    = this.get("title")
              this._href 	   = this.get("href")
              this._classes  = this.getClasses()
        }

        /* Set Attributes for each item */
        set(w, v){
              this.c.forEach(function(i){
                  i.setAttribute(w, v)
              });
              return this;
        }

        /* Getter functions */
        get(w){
              try{
                return this.c[0].getAttribute(w);
              }catch(e){
                return "Item "+w+" not found";
              }
          }

        getClasses(){
          try{
            let _c = this.c[0].getAttribute("class");
            return Boolean(_c)?_c.split(" "):[];
          }catch(e){
            return [];
          }
        }

        add(w, v){
            let i = this.get(w).split(" "),r;
            i.push(v);
            this.set(w, this.join(i));
            return this;
        }

        join(w = []){
            return w.join(" ");
        }

        hasClass(w){
            return this._classes.indexOf(w) >= 0;
        }

        removeClass(w){
            var c = this._classes.filter(function(i, v, ar){
            return i !== w;
         })

		    this.set("class", this.join(c));
		    return this;
	}


}


class Item_Validation extends Element_Attributes{
      constructor(i){
          super(i);
      }

      exist(){
          return this.c.length > 0;
      }

      equal(i1, i2){
          let t = typeof i1;

          switch(t){
              case "string": return i1 === i2;
              case "number": return i1 === i2;
              case "object": return i2.every(function(i){
                        return i1.indexOf(i) >= 0;
                        });
              default: 	   return i1 === i2;
          }
      }

      is_number(w){
          return typeof w === "number";
      }

      is_string(w){
          return typeof w === "string";
      }

      is_array(w){
          return [].constructor.isArray(w);
      }

      is_tag(w){
          return Boolean(w.tagName);
      }

      is_object(w){
          return w.constructor.name === "Object";
      }
}


class Encryptions extends Item_Validation {

        constructor(item){
          super(item);
          this.text 		= null;
          this.letters 	= [];

          this.set_letters();

        }

        /* *
         * Set the letters to be used for encryption
         * */
         set_letters(){
          this.letters = "abcdefghijklmnopqrstuvwxyz";
         }

        /* *
         * Set the lettering for this item
         * */
         get_letters(){
          return this.letters;
         }


        /* *
         * Encrypt the given item's text
         * */
         encrypt(text = null, depth = 1){
          var letters, results, holder, index, h, letter;

          for(let i = 0; i < this.items.length; i++){
              if(Boolean(text)){
                this.text = text;
              }else{
                this.text = this.items[i].innerText;
              }


              letters = this.get_letters();
              results = "";

              for(index = 0; index < this.text.length; index++){
                 holder	 = this.letters.indexOf(this.text[index]);
                 if(holder >= 0){
                  holder += depth; 

                  letter  = this.letters[holder%26];

                  results += letter;
                 }else{
                  h = this.letters.indexOf(this.text[index].toLowerCase());
                  if(h >= 0){
                    h 		+= depth;

                    letter  = this.letters[h%26];
                    results += letter.toUpperCase();
                  }else{
                    results += this.text[index];
                  }
                 }
               }
               var r = this.setText(results, this.items[i]);
             }

           return this;
           }

        /* *
         * Encrypt the given item's text
         * */
        decrypt(text = null, depth = 1){
          var letters, results, holder, index, h, letter;

          for(let i = 0; i < this.items.length; i++){
              if(Boolean(text)){
                this.text = text;
              }else{
                this.text = this.items[i].innerText;
              }

              letters = this.get_letters();
              results = "";

              for(index = 0; index < this.text.length; index++){
                 holder	 = this.letters.indexOf(this.text[index]);
                 if(holder >= 0){
                  holder -= depth; 

                  if(holder < 0){
                    holder += 26;
                  }
                  letter  = this.letters[holder%26];

                  results += letter;
                 }else{
                  h = this.letters.indexOf(this.text[index].toLowerCase());
                  if(h >= 0){
                    h 		-= depth;
                    if(h < 0){
                      h += 26;
                    }

                    letter = this.letters[h%26];

                    results += letter.toUpperCase();

                  }else{
                    results += this.text[index];
                  }
                 }

                }
                var r = this.setText(results, this.items[i]);
            }

          return this;

      }
}





/* *
 * This is the wrapper function for the class
 * */
var dom = function(item){
			          return new Encryptions(item);
		      }

/* *
 * This is another wrapper function for the class
 * */
var d = function(item){
			return new Encryptions(item);
		}

/* *
 * This is validation function for the class
 * */
var _ = new Item_Validation();

