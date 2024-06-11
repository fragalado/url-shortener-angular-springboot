import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-redirect-view',
  templateUrl: './redirect-view.component.html',
  styleUrls: ['./redirect-view.component.css'],
})
export class RedirectViewComponent implements OnInit {
  constructor(
    private urlService: UrlService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtenemos el id de la url
    const id = this.route.snapshot.paramMap.get('id');

    // Comprobamos que se ha encontrado id
    if (id) {
      this.urlService.getOriginalUrl(id!).subscribe({
        next: (data: any) => {
          // Redirigimos a la url real
          this.router.navigateByUrl('/');
          window.location.href = data.url;
        },
        error: (error) => {
          console.log(error);
          this.router.navigateByUrl('/');
        },
      });
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
