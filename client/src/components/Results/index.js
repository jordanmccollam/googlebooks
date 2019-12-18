import React, { Component } from "react";
import "./style.css";
import Search from "../Search";
import axios from "axios";
import API from "../../utils/API";

// require("dotenv").config();

class Results extends Component {

    state = {
        books: [{
            title: "To Kill A Mockingbird",
            authors: "Harper Lee",
            description: "Voted America's Best-Loved Novel in PBS's The Great American Read Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
            link: "http://books.google.com/books?id=PGR2AwAAQBAJ&printsec=frontcover&dq=tokillamockingbird&hl=&as_ebook=1&cd=1&source=gbs_api",
            image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }, {
            title: "Why To Kill a Mockingbird Matters",
            authors: "Tom Santopietro",
            description: "Tom Santopietro, an author well-known for his writing about American popular culture, delves into the heart of the beloved classic and shows readers why To Kill a Mockingbird matters more today than ever before. With 40 million copies sold, To Kill a Mockingbird’s poignant but clear eyed examination of human nature has cemented its status as a global classic. Tom Santopietro's new book, Why To Kill a Mockingbird Matters, takes a 360 degree look at the Mockingbird phenomenon both on page and screen. Santopietro traces the writing of To Kill a Mockingbird, the impact of the Pulitzer Prize, and investigates the claims that Lee’s book is actually racist. Here for the first time is the full behind the scenes story regarding the creation of the 1962 film, one which entered the American consciousness in a way that few other films ever have. From the earliest casting sessions to the Oscars and the 50th Anniversary screening at the White House, Santopietro examines exactly what makes the movie and Gregory Peck’s unforgettable performance as Atticus Finch so captivating. As Americans yearn for an end to divisiveness, there is no better time to look at the significance of Harper Lee's book, the film, and all that came after.",
            link: "http://books.google.com/books?id=r0dBDwAAQBAJ&printsec=frontcover&dq=tokillamockingbird&hl=&as_ebook=1&cd=2&source=gbs_api",
            image: "http://books.google.com/books/content?id=r0dBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }, {
            title: "Go Set a Watchman",
            authors: "Harper Lee",
            description: "A historic literary event: the publication of a newly discovered novel, the earliest known work from Harper Lee, the beloved, bestselling author of the Pulitzer Prize-winning classic, To Kill a Mockingbird. Originally written in the mid-1950s, Go Set a Watchman was the novel Harper Lee first submitted to her publishers before To Kill a Mockingbird. Assumed to have been lost, the manuscript was discovered in late 2014. Go Set a Watchman features many of the characters from To Kill a Mockingbird some twenty years later. Returning home to Maycomb to visit her father, Jean Louise Finch—Scout—struggles with issues both personal and political, involving Atticus, society, and the small Alabama town that shaped her. Exploring how the characters from To Kill a Mockingbird are adjusting to the turbulent events transforming mid-1950s America, Go Set a Watchman casts a fascinating new light on Harper Lee’s enduring classic. Moving, funny and compelling, it stands as a magnificent novel in its own right.",
            link: "http://books.google.com/books?id=OQR4BgAAQBAJ&printsec=frontcover&dq=tokillamockingbird&hl=&as_ebook=1&cd=3&source=gbs_api",
            image: "http://books.google.com/books/content?id=OQR4BgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }],

    }

    handleInput = event => {
        var value = event.target.value;
        this.search(value);
    }

    search = value => {
        const url = "https://www.googleapis.com/books/v1/volumes?q=";
        const end_Url = "&download=epub&key=";
        // Need to put API key in .env
        const apiKey = "AIzaSyBIU23QDl5QVbetNbxjzk9EKwftRIs02wo";

        axios.get(url + value + end_Url + apiKey)
            .then(res => {
                if (res) {
                    var bookArray = [];
                    for (var i = 0; i < res.data.items.length && 3; i++) {
                        var newBook = {
                            title: res.data.items[i].volumeInfo.title,
                            authors: res.data.items[i].volumeInfo.authors,
                            description: res.data.items[i].volumeInfo.description,
                            link: res.data.items[i].volumeInfo.previewLink,
                            image: res.data.items[i].volumeInfo.imageLinks.smallThumbnail
                        };
                        bookArray.push(newBook);
                    }
    
                    this.setState({books: bookArray});
                }
            })
    }

    saveBook = num => {
        API.saveBook(this.state.books[num]);
        alert(this.state.books[num].title + " was saved!\nGo to the saved page to see it!")
    }

    render() {
        return(
            <div>
                <Search handleInput={this.handleInput} />
                <div className="container text-left mt-3 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="border-bottom border-primary text-primary mb-3">Search</h2>

                            {/* BOOK 1 */}
                            <div class="card">
                                <h5 class="card-header">{this.state.books[0].title}</h5>
                                <div class="card-body row">
                                    <div className="col-lg-3 d-none d-lg-block">
                                        <img width src={this.state.books[0].image} alt="book" />
                                    </div>
                                    <div className="col-lg-9 flex-column d-flex text-right">
                                        <h5 class="card-title font-italic text-left">- By {this.state.books[0].authors} </h5>
                                        <p class="card-text text-left">{this.state.books[0].description} </p>
                                        <div className="mt-auto ml-auto">
                                            <a href={this.state.books[0].link} target="blank" class="btn btn-primary mr-3">Check It Out</a>
                                            <button className="btn btn-success" onClick={() => this.saveBook(0)}>Save </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BOOK 2 */}
                            <div class="card mt-3">
                                <h5 class="card-header">{this.state.books[1].title}</h5>
                                <div class="card-body row">
                                    <div className="col-lg-3 d-none d-lg-block">
                                        <img width src={this.state.books[1].image} alt="book" />
                                    </div>
                                    <div className="col-lg-9 flex-column d-flex text-right">
                                        <h5 class="card-title font-italic text-left">- By {this.state.books[1].authors} </h5>
                                        <p class="card-text text-left">{this.state.books[1].description} </p>
                                        <div className="mt-auto ml-auto">
                                            <a href={this.state.books[1].link} target="blank" class="btn btn-primary mr-3">Check It Out</a>
                                            <button className="btn btn-success" onClick={() => this.saveBook(1)}>Save </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BOOK 3 */}
                            <div class="card mt-3">
                                <h5 class="card-header">{this.state.books[2].title}</h5>
                                <div class="card-body row">
                                    <div className="col-lg-3 d-none d-lg-block">
                                        <img width src={this.state.books[2].image} alt="book" />
                                    </div>
                                    <div className="col-lg-9 flex-column d-flex text-right">
                                        <h5 class="card-title font-italic text-left">- By {this.state.books[2].authors} </h5>
                                        <p class="card-text text-left">{this.state.books[2].description} </p>
                                        <div className="mt-auto ml-auto">
                                            <a href={this.state.books[2].link} target="blank" class="btn btn-primary mr-3">Check It Out</a>
                                            <button className="btn btn-success" onClick={() => this.saveBook(2)}>Save </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;