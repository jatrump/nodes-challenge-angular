import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Arena } from "./components/arena/arena.component";
import { Node } from "./components/node/node.component";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, Arena, Node],
  /**
   * Leave or take out FormsModule and ReactiveFormsModule? 
   **/
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
