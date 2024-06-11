import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shortUrl?: string;
  noUrl: boolean = false;

  form = this.formBuilder.group({
    url: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private urlService: UrlService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {}

  send() {
    // 1. Obtenemos la url introducida
    const urlIntroducida = this.form.controls['url'].value;

    // 2. Verificamos que la estructura es la siguiente: https://.../ ó http://.../
    if (
      !urlIntroducida?.startsWith('https://') &&
      !urlIntroducida?.startsWith('http://')
    ) {
      // Mandamos mensaje de error
      this.noUrl = true;
      return;
    } else {
      this.noUrl = false;
    }

    // 3. Si esta bien, la enviamos
    this.urlService.getShortUrl(urlIntroducida!).subscribe({
      next: (data: any) => {
        // 4. La devolvemos a la vista
        this.shortUrl = 'http://localhost:4200/' + data.url;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  copyToClipboard() {
    this.clipboard.copy(this.shortUrl!);
  }
}
