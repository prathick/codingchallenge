var courses=[
	{
		id:1,
		course:"Programming in C"
	},
	{
		id:2,
		course:"Distributed Computing"
	},
	{
		id:3,
		course:"Database Systems"
	},
	{
		id:4,
		course:"Algorithms 1"
	},
	{
		id:5,
		course:"Algorithms 2"
	},
	{
		id:6,
		course:"Programming in Java"
	},
	{
		id:7,
		course:"Advanced Programming in Java"
	},
	{
		id:8,
		course:"Big Data with Apache Spark"
	},
	{
		id:9,
		course:"Programming in Perl"
	},
	{
		id:10,
		course:"Probability"
	},
	{
		id:11,
		course:"Scalable Machine Learning"
	},
	{
		id:12,
		course:"Data Structures"
	}
	];
var preReq = [[2,1],[2,6],[2,11],[3,1],[3,6],[3,7],[3,7],[3,12],[4,1],[4,3],[4,9],[5,1],[5,3],[5,4],[5,12],[6,1],[7,6],[8,6],[8,7],[8,10],[8,12],[9,5],[11,8],[11,10]]
window.onload = function(){

	//console.log(preReq[0][1]);
	var courseLength= courses.length
	var ordered_list=order(courseLength,preReq);
	var ul=document.createElement("ul");
	console.log(ordered_list);
	ordered_list.forEach(function(element){

		var li = document.createElement('li');

		li.innerHTML=element;
		ul.appendChild(li);
	});
	document.body.appendChild(ul)
}



order = function(courseLength, preReq){
console.log(preReq.length)

    var len = preReq.length;
    if(len == 0){
       var res = [];
        for( m=0; m<courseLength; m++){
            res[m]=m;
        }
        return res;
    }

     var count = [0,0,0,0,0,0,0,0,0,0,0,0];
    for(i=0; i<len; i++){
    	var newVal=preReq[i][0];
       count[newVal-1] = count[newVal-1] +1;
       }
console.log(count)
      var noprecourses =[];
    for(i=0; i<courseLength; i++){
        if(count[i]==0){
            noprecourses.push(i+1);
        }
    }
    console.log(noprecourses)
    //return noprecourses;

    var num = noprecourses.length;
 
    //initialize result
    var result =  [0,0,0,0,0,0,0,0,0,0,0,0];
    var j=0;
 
     	
     while(!noprecourses.length == 0){
    	var cc= noprecourses.shift();
    	//debugger;
    	//console.log(cc)
    	result[j]=cc;
    	j++;
    	console.log(num);
    		for( i=0; i<len; i++){

    			 if(preReq[i][1]==cc){
    			 	var newVal=preReq[i][0];
    			 	 count[newVal-1] = count[newVal-1] -1;
    			 	 if(count[newVal-1]==0){

    			 	 	noprecourses.push(preReq[i][0]);
    			 	 	num++;
    			 	 }
    			 }


    		}
    
   }

   
        return result;
  

}