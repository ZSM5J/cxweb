import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public programms = [
    {id: 1, name: 'Hello world', code: 'package main \n\n func main () (){\n \tstr.print("Hello World!")\n}'},
    {id: 2, name: 'Looping', code: 'package main\n' +
    '\n' +
    'func main () (out i32) {\n' +
    '\tvar out i32 = 0\n' +
    '\tfor ltI32(out, 10) {\n' +
    '\t\tprintI32(out)\n' +
    '\t\tout = addI32(out, 1)\n' +
    '\t}\n' + '}'},
    {id: 3, name: 'Factorial', code: 'package main \n\nfunc factorial (num i32) (fact i32) ' +
    '{\n\tif eqI32(num, 1) {\n\t\tfact := idI32(1)\n\t} ' +
    'else {\n\t\tfact := mulI32(num, factorial(subI32(num, 1)))\n\t}\n}\n' +
    '\nfunc main () (out i32) {\n\tfactorial(6)\n}'},
    {id: 4, name: 'Evolving a function', code: 'package main\n\nvar inps []f64 = ' +
    '[]f64{\n\t-10.0, -9.0, -8.0, -7.0, -6.0, -5.0, -4.0, -3.0, -2.0, ' +
    '-1.0,\n\t0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0}\n\nvar' +
    ' outs []f64 = []f64{\n\t90.0, 72.0, 56.0, 42.0, 30.0, 20.0, 12.0, 6.0, 2.0, 0.0, ' +
    '0.0,\n\t2.0, 6.0, 12.0, 20.0, 30.0, 42.0, 56.0, 72.0, 90.0, 110.0}\n\nfunc solution ' +
    '(n f64) (out f64) {\n\tsquare = mulF64(n, n)\n}\n\nfunc main () ' +
    '(out f64) {\n\t:dStack false;\n\t:dProgram true;\n\tevolve("solution", "addF64|mulF64|subF64", inps, outs, 5, ' +
    '300, f32ToF64(0.1))\n\n\tprintStr("Extrapolating solution")\n\tprintF64(solution(f32ToF64(30.0)))\n}'},
    {id: 5, name: 'More examples!', code: ''}
  ];
  public selectedValue = this.programms[0];
  public code = this.programms[0].code;
  showResult = false;
  result = 'waiting...';

  constructor( private titleService: Title, private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.titleService.setTitle('CX Programming Language');
  }

  changeCode() {

    if (this.selectedValue.id === 5) {
      this.router.navigate(['examples']);
    } else {
      this.code = this.selectedValue.code;
    }
  }

  clearCode() {
    this.code = '';
  }

  runCode() {
    console.log(this.code);
    let str = this.code;
    str = str.replace(new RegExp('\n', 'g') , ' ');
    str = str.replace(new RegExp('\t', 'g') , ' ');
    str = str.replace(new RegExp('"', 'g') , '\\"');
    console.log(str);
    this.api.sendCode(str).subscribe((data: any) => {
       this.result = data._body;
       this.showResult = true;
     });

  }
}
