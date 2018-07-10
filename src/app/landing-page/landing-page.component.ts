import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  curriculumDesign: String[] = ["	Curriculum for undergraduate and graduate level RE studies",
  "	Models of Integration of RE courses into software engineering programs",
  "	Mapping RE elements from the SWEBOK (Software Engineering Body Of Knowledge) to RE curricula",
  "	Identifying and incorporating specific RE related topics into the general curriculum and/or software engineering courses",
  "	Curriculum for industrial training programs "
  ];

  techniques: String[] = ["	Creative methods for teaching stakeholder identification, requirements elicitation, negotiation and consensus building, requirements writing, and other critical RE skills",
  "	Specific tools, exercises, and assignments developed to support RE skills training"
  ];

  Assessments: String [] = ["	Which assessment method to use: exam, test, case study, essay, report, presentation, or something else?", 
  "	Strategies for assessment of learning soft skills",
  "	What should students be able to do as a result of learning RE? ",
  "	Methods of objectively measuring assessments "
  ];

  methods: String [] = ["	Survey results related to topics such as the effectiveness of teaching methods, RE skills needed to be effective in industry, skill mismatches between graduating students and industry needs etc.", 
  "	Studies into the effectiveness of requirements engineering educational practices ",
  "	Studies on different pedagogic approaches to improve the learning outcomes",
  "	Experience reports including industrial training and university level curriculum"
  ];

  papers: {}[] = [
    {authors: "Bernd Westphal", title: "An Undergraduate Requirements Engineering Curriculum with Formal Methods"},
    {authors: "Jennifer Horkoff", title: "The Influences of Agile Methods in Requirements Engineering Pedagogy"},
    {authors: "Kim Hertz and Paola Spoletini", title: "Are Requirements Engineering Courses Covering what Industry Needs? A Preliminary Analysis of the U.S. Situation"},
    {authors: "Itzel Morales-Ramirez and Luis Alva-Martinez", title: "Requirements Analysis Skills: How to Train Practitioners?"},
    {authors: "Antonio Lopez-Lorca, Rachel Burrows and Leon Sterling", title: "Teaching Goal Models in Agile Requirements Engineering"}
  ];

  displayedColumns: string[] = ["Authors", "Title"];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  getHeaderStyle(){
    let headerStyle = {
      'min-height': this.mobileQuery.matches ? '200px' : '240px'
    }

    return headerStyle;
  }

  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
