"use strict"

class App{
	constructor(){
		this.x = [
		{	
			"image": "images/like.jpg",
			"title": "Be a beast on the Court Nothing can stop you!",
			"content": "We will enhance your skill how to be a mamal on the court." 			
		},
		{
			"image": "images/block.jpg",
			"title": "Be the Best deffender on the court",
			"content": "Nothing can leave you behind be the best deffender."
		},
		{	
			"image": "images/shoot.jpg",
			"title": "Be A sharp shooter on the court ",
			"content": "You will become a deadly shooter on the court they won't allow you to leave behind."
		},	
		
		];

	}

	render(html,component){
		component.innerHTML += html;
	}


	reRender(html,component){
		component.innerHTML = html;
	}	

	readParfait(){
		let listtable = document.getElementById("x");
		let html = ``;
		for(let i=0;i<this.x.length;i++){
			html += `
			<tr>
				<td>${this.x[i].title}</td>
				<td>${this.x[i].content}</td>
				<td><a href="#cntainer" class="btn btn-lg btn-primary" onclick ="component.moreInfo(${[i]})">More Info</a></td> 
			</tr>`;       
		}
		list.innerHTML = html;
	}


	moreInfoDetails(key){
		let parfaitInfo = document.getElementById("thisinfo");
		let html = `
		<section>
            <div id="meme" class="container">
              <div class="row">
              <div class="col col-md-12">
                <center> <h1>${this.x[key].title}</h1></center><br>
                </div>
                <div class="col col-md-12">
                <center><img src="${this.x[key].image}" alt="No image"></center>
                </div>
              </div>
            </div><br><br><br>
              <div class="row">
                <div class="col col-md-5" id="textBox">
                            <p><br>
                              Comment:<br> ${this.x[key].content}<br><br>
                              availabilty:<br>  ${this.x[key].availabilty}<br><br>
                              Main Ingredients:<br>${this.x[key].mainIngredients}<br><br>

                              Price:
                            </p>
                           <p id="price">${this.x[key].cost} </p>
                            <br><br><br>
                            <center><a class="btn btn-lg btn-primary">Buy</a>
                            <a class="btn btn-lg btn-primary">Delete</a>
                            <a class="btn btn-lg btn-primary">Update</a>
                            <a class="btn btn-lg btn-primary" onclick="component.MoreDetails()">Back</a></center>  
                      </div>
                      </div>
        </section>
            `;
            this.reRender(`${html}`,document.getElementById("thisinfo"));
	}

	searchParfait(){
		let searching = document.getElementById("searching");
		let listtable = document.getElementById("x");
		let html = ``;
		for(let i=0;i<this.x.length;i++){
			if(this.x[i].title.toLowerCase().includes(searching.value)||this.x[i].content.toLowerCase().includes(searching.value)||this.x[i].title.toUpperCase().includes(searching.value)||this.x[i].content.toUpperCase().includes(searching.value)){
				html += `<tr>
				<td>${this.x[i].title}</td>
				<td>${this.x[i].content}</td>
				<td><a href="#" class="btn btn-lg btn-primary" onclick ="component.moreInfo(${[i]})">More Info</a></td> 
				</tr>`; 
			}
		}
		list.innerHTML = html;
	}


	createParfait(){
		let image = document.getElementById('');
		let title = document.getElementById('');
		let content = document.getElementById('');
		let availabilty = document.getElementById('');
		let mainIngredients = document.getElementById('');
		let cost = document.getElementById('');
		let exact = {
			"image": image.value,
			"title": title.value,
			"content": content.value,
			"availabilty": availabilty.value,
			"mainIngredients":mainIngredients.value,
			"cost": cost.value,
			};
			this.x.push(exact);  // Add to main array
			console.log(this.act);
			// this.refreshlist(); // refresh list
			image.value = title.value = content.value = availabilty.value = mainIngredients.value = cost.value ='';
	}

}





class Component extends App{
	constructor(){		
		super();
	}

  
	landingPage(){
		let html = `
		<div id ="indexpage">
		    <nav>
			<head>
              <ul class="nav nav-pills float-xs-Left">
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showLandingPage()">
					<i class="fa fa-home"></i>
                  	Home <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " href="#products" onclick="component.showproducts()">
					<i class="fa fa-list"></i>
                  	Training list <span class="sr-only">(current)</span></a>
                </li>
                       <li class="nav-item">
                		  <a href ="#"onclick="component.Moredetails()">
					<i class="fa fa-film"></i>
                  Add You're own Training</a>



                </li>
              </ul>
            </nav>            
   
                	</div>
					</div>
				</div>
			</header>
			
						
		<div class="preloader"> <i class="fa fa-circle-o-notch fa-spin"></i></div>
			<div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel">
				<div class="carousel-inner">
					<div class="item active" style="background-image: url(images/slider/1.jpg)">
						<div class="caption">
							<h1 class="animated fadeInLeftBig">Welcome to <span>Basketball Training camp</span></h1>
							<p class="animated fadeInRightBig"></p>
							<a data-scroll class="btn btn-start animated fadeInUpBig" href="#products">Train now</a>
						</div>
					</div>
					<div class="item" style="background-image: url(images/slider/2.jpg)">
						<div class="caption">
							<h1 class="animated fadeInLeftBig"><span>Basketball camp</span></h1>
							<p class="animated fadeInRightBig">The Best basketball Camp <br> It will enhance your  Basketball skills.</p>
							<a data-scroll class="btn btn-start animated fadeInUpBig" href="#products">Train now</a>
						</div>
					</div>
					<div class="item" style="background-image: url(images/slider/3.jpg)">
						<div class="caption">
							<h1 class="animated fadeInLeftBig"><span>Be The part of The Future Legend</span></h1>
							<p class="animated fadeInRightBig">It's not too late for you to learn and join  be the part of the future star.</p>
							<a data-scroll class="btn btn-start animated fadeInUpBig" href="#products">Train now</a>
						</div>
					</div>
				</div>
				<a class="left-control" href="#home-slider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
				<a class="right-control" href="#home-slider" data-slide="next"><i class="fa fa-angle-right"></i></a>
				<a id="tohash" href="#products"><i class="fa fa-angle-down"></i></a>
			</div>
			<div class="main-nav">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="index.html">
							<h1><img class="img-responsive" src="images/logo.png" alt="logo"></h1>
						</a>                    
					</div>

                	</div>
					</div>
				</div>
			
			<!-- NAVIGATION -->
				<div id ="navigation">
					<div class="main-nav">
						<div class="container">
							
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								<a class="navbar-brand" href="index.html">		
								</a>                    
							</div>
							<div class="collapse navbar-collapse">
								<ul class="nav navbar-nav navbar-right">                 	
								</ul> 
							</div>


							</div>
						</div>
				</div>
				<!--  -->
			<!-- PORTFOLIO : PICTURE -->
				<section id="portfolio">
						<br><br><br>	
								<div class="container">
									<div class="row">
										<div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
											
										</div>
									</div> 
								</div>

								<div class="container-fluid">
								<div class="row">
										<!-- `;
										for(let index=0;index<this.x.length;index++){
										html +=` -->
										
								<!-- 		`;
									}
						html+=` -->
								</div>
							</div>
			<!-- WHERE THE READ IS LOCATED -->
					<div id="tables">
						<section id="contact" class="container">
							<div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
							<h1>Search For </h1>
							</div>
							<form id="main-contact-form" name="contact-form" method="post" action="#">   
							<div class="form-group">
								<input oninput="component.searchParfait()" id="searching" type="text" class="form-control" placeholder="Search here for the best training you want...">
							</div>
						</form> 
						</section>

						<section>
							<div class="container">
								<table class="table">
									<thead>
										<tr>
											<th data-field="id"><center>Trainings</center></th>
											<th data-field="name"><center>Details</center></th>
										</tr>
									</thead>
									<tbody id="list" class=" table-bordered table-hover">  
									</tbody>
								</table>
							</div>
							<br>
							<br>
							<div class="load-more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
								<a href="#" onclick="component.home()" class="btn btn-lg btn-primary">Back</a>
							</div>
						</section>
					</div>
				<!-- ======= -->



							<!-- CreateParfait-->
				<section id="creator">
			  		<div class="container">
			          	<div id="add">
			          		<section id="contact" class="container">
			           		<div class="heading text-center col-sm-12  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
			              	<center><h1>Add New Training</h1></center></div>
				            <form id="main-contact-form" name="contact-form" method="post" action="#">   
				              <div class="form-group">
				              <section>
				                <p><b>Image</b></p><input  id="image" type="text" class="form-control" placeholder="Enter URL on image..."><br>
				                <p><b>Training</b></p><input  id="title" type="text" class="form-control" placeholder="Enter Title here..."><br>
				                <p><b>waht do you want to learn</b></p><input  id="content" type="text" class="form-control" placeholder="Enter comment here..."><br>
				               
				              </section>
				              </div>
	            			<center><button onclick="component.createParfait()" class="btn btn-lg btn-primary">Add</button></center>
	            			</form>
            				</section>
            			
          				</div>
    				</div>
				</section>
				<!--========-->
				
				<!--MORE INFO BUTTON-->
				<section id="meme" class="moreInfo">
					<div class="container">
						<div id="thisinfo"></div>
					</div>
				</section>
				<!--  -->

				





			<section id="products">
			<section id="products">
				<div class="container">
					<div class="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
						<div class="row">

						</div> 
					</div>		
				<div class="text-center our-services">
					<div class="row">

		`;
		
		for(let index=0;index<this.x.length;index++){
			html +=`

						<div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
							<div><img src="${this.x[index].image}""></div>
							<div class="service-info">
								<h3>${this.x[index].title}</h3>
								<p>${this.x[index].content}</p>
								<a href="#product" class="btn btn-lg btn-primary">WORK ON</a>
							</div>
						</div>









			`;
		}
		html+=`

						</div>
					</div>
				</div>
			</section>
			</section>

			<footer id="footer">
				<div class="footer-top wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
					<div class="container text-center">
						<div class="footer-logo">
							<a href="index.html"><img class="img-responsive" src="images/p.jpg" alt=""></a>
						</div>
						<div class="social-icons">
							<ul>
								<li><a class="envelope" href="#"><i class="fa fa-envelope"></i></a></li>
								<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li> 
								<li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a class="tumblr" href="#"><i class="fa fa-tumblr-square"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</footer>


		`;
		this.reRender(`${html}`,document.getElementById("app"));
	$('#tables').hide();
		$('#thisinfo').hide();
		$('#creator').hide();

	}


	home(){
		$('#home').show();
		$('#indexpage').hide();
		$('#tables').hide();
		$('#thisinfo').hide();
		$('#creator').hide();
	}

	MoreDetails(){
		$('#home').hide();
		$('#indexpage').show(); 
		$('#tables').hide(); 
		$('#thisinfo').hide();
		$('#creator').hide();
	}

	creator(){
		$('#home').hide();
		$('#indexpage').hide(); 
		$('#tables').hide(); 
		$('#thisinfo').show();
		$('#creator').hide();
	}

	moreInfo(key){
		$('#home').hide();
		$('#indexpage').hide(); 
		$('#tables').hide();
		$('#thisinfo').show();
		$('#creator').hide();
		component.moreInfoDetails(key);
	}
}

let component = new Component();
component.landingPage();
component.readParfait();




