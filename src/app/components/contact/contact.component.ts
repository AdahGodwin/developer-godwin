import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { faWhatsapp, faLinkedinIn, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedinIn;
  faFacebook = faFacebook;
  fainstagram = faInstagram;
  ngOnInit(): void {
    Aos.init();
  }
}
