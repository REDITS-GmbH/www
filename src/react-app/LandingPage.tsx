import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const [showDataPrivacy, setShowDataPrivacy] = useState(false);

  const toggleDataPrivacy = () => {
    setShowDataPrivacy(!showDataPrivacy);
  };

  // External link icon component
  const ExternalLinkIcon = () => (
    <svg 
      style={{width: '12px', height: '12px', marginLeft: '2px', verticalAlign: 'baseline'}}
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
    </svg>
  );

  // External link component
  const ExternalLink: React.FC<{href: string, children: React.ReactNode, style?: React.CSSProperties}> = ({href, children, style}) => (
    <a href={href} target="_blank" rel="noopener" style={style}>
      {children}<ExternalLinkIcon />
    </a>
  );

  const ReditsLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.5 177.2" width="748" height="317">
      <defs>
        <style>
          {`.st0 { fill: #f01414; }
            .st1 { fill: #fff; }
            .st2 { fill: none; stroke: #f01414; stroke-miterlimit: 10; stroke-width: 3.7px; }`}
        </style>
      </defs>
      <rect className="st0" x="0" y="0" width="372.5" height="177.2" rx="21.5" ry="21.5"/>
      <path className="st1" d="M27.5,26.1h22.1c21.9,0,37.9,11.6,37.9,39.1v1.6c0,15.9-6.3,26.1-14.4,32.2l16.5,49.8h-22.8l-13.8-42.8h-4v42.8h-21.4V26.1ZM49.9,86.8c9.3,0,16.1-5.4,16.1-19.8v-1.4c0-15.4-7.4-19.5-16.6-19.5h-.5v40.7h1.1Z"/>
      <path className="st1" d="M95.3,26.1h47v20.3h-25.6v30.5h22.6v20.3h-22.6v31.2h26.1v20.3h-47.5V26.1Z"/>
      <path className="st1" d="M150.7,26.1h20c27.3,0,42.9,19.8,42.9,59.2v4.2c0,39.4-15.6,59.2-42.9,59.2h-20V26.1ZM172.9,129.2c10.2,0,18.9-8.9,18.9-39.6v-4.2c0-30.7-8.8-39.6-18.9-39.6h-.9v83.4h.9Z"/>
      <g transform="translate(-47, 0)">
        <path className="st1" d="M267.9,26.1h21.4v122.7h-21.4V26.1Z"/>
        <path className="st1" d="M308.1,46.5h-19.1v-20.3h80.5v20.3h-40.1v102.4h-21.4V46.5Z"/>
        <path className="st1" d="M348,144.1v-22.3c7.5,4.4,13.5,6.8,19.3,6.8s11.4-3,11.4-10.5v-.4c0-5.6-1.8-9.8-11.9-21.4-14.5-16.5-20.5-24.4-20.5-39.3v-.4c0-19.6,12.8-32.1,29.8-32.1s13.7,1.2,18.9,3.9v22.3c-6.7-3.9-10.7-5.6-16.3-5.6s-11,3.9-11,10.5v.4c0,5.8,1.8,7.9,11.9,19.6,16.8,19.5,20.5,27,20.5,41v.4c0,19.3-13.5,32.1-30.3,32.1s-15.6-2.1-21.7-5.1Z"/>
        <line className="st2" x1="336.6" y1="54.9" x2="373.1" y2="18.4"/>
        <line className="st2" x1="298.1" y1="54.9" x2="261.6" y2="18.4"/>
      </g>
    </svg>
  );

  return (
    <main>
      <div id="firstContainer">
        <ReditsLogo />
      </div>
      <div id="secondRow">
        <p id="secondContainer">
          SOFTWARE&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;USABILITY
          <br/>ENGINEERING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLOUD
          <br/>SECURITY&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;APPLICATION
          <br/>DEVELOPMENT&nbsp;&nbsp;.&nbsp;HOSTING
          <br/>PROJECT&nbsp;.&nbsp;ARCHITECTURE
          <br/>METHODOLOGY&nbsp;&nbsp;.&nbsp;&nbsp;PCI-DSS
        </p>
        <div id="seperatorOne"></div>
        <div id="thirdContainer">
          09621 <span style={{fontSize: '10px'}}>/</span> 7788990
          <br/>info@redits.com
          <br/>
          <br/>REDITS
          <br/><span style={{fontSize: '12px'}}>A project by <ExternalLink href="https://www.blueits.com">BLUEITS GmbH</ExternalLink></span>
          <br/>Auf den Hochäckern 5
          <br/>92224 Amberg
        </div>
        <div id="seperatorTwo"></div>
        <div id="fourthContainer">
          Geschäftsführer:
          <br/>Dietmar Scharf
          <br/>
          <br/>Amtsgericht Amberg
          <br/>HRB 5265
          <br/>DE813025272
        </div>
        <div style={{fontWeight: 'normal', fontSize: '13px'}}>
          {/* Empty IHK field for REDITS */}
        </div>
      </div>
      <h5 
        style={{fontWeight: 'normal', cursor: 'pointer'}} 
        id="datenschutzHeader"
        onClick={toggleDataPrivacy}
      >
        Datenschutzerklärung
      </h5>
      <div id="datenschutzContainer" style={{display: showDataPrivacy ? 'block' : 'none'}}>
        <h5>1. Verantwortliche Stelle</h5>
        <p>Verantwortlich für die Datenverarbeitung beim Projekt REDITS ist:</p>
        <p>
          <ExternalLink href="https://www.blueits.com">BLUEITS GmbH</ExternalLink><br/>
          Dietmar Scharf (Geschäftsführer)<br/>
          Auf den Hochäckern 5<br/>
          92224 Amberg<br/>
          Deutschland
        </p>
        
        <h5>2. Kontakt für Datenschutzanfragen</h5>
        <p>
          E-Mail: datenschutz@blueits.com<br/>
          Telefon: 09621 / 7788990
        </p>

        <h5>3. Datenerfassung auf dieser Website</h5>
        <p><strong>Technisch notwendige Daten</strong></p>
        <p>Beim Besuch unserer Website werden automatisch folgende technische Daten erfasst:</p>
        <ul>
          <li>IP-Adresse</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
        </ul>
        <p>Diese Daten werden ausschließlich zur technischen Bereitstellung der Website verwendet und nicht personenbezogen ausgewertet.</p>

        <h5>4. Keine Cookies oder Tracking</h5>
        <p>Diese Website verwendet:</p>
        <ul>
          <li>Keine Cookies</li>
          <li>Keine Analyse-Tools (z.B. Google Analytics)</li>
          <li>Keine Social-Media-Plugins</li>
          <li>Kein Tracking oder Profiling</li>
        </ul>

        <h5>5. Hosting und Infrastruktur</h5>
        <p>Diese Website wird über Cloudflare Workers bereitgestellt. Cloudflare verarbeitet dabei technisch notwendige Daten zur Auslieferung der Website. Weitere Informationen finden Sie in der <ExternalLink href="https://www.cloudflare.com/privacypolicy/">Datenschutzerklärung von Cloudflare</ExternalLink>.</p>

        <h5>6. Ihre Rechte nach DSGVO</h5>
        <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
        <ul>
          <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
          <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
          <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
          <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
          <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          <li><strong>Widerspruch</strong> (Art. 21 DSGVO)</li>
        </ul>

        <h5>7. Beschwerderecht</h5>
        <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Aufsichtsbehörde Ihres Wohnsitzes oder die für uns zuständige Behörde:</p>
        <p>
          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br/>
          Promenade 18<br/>
          91522 Ansbach<br/>
          <ExternalLink href="https://www.lda.bayern.de">www.lda.bayern.de</ExternalLink>
        </p>

        <h5>8. SSL-Verschlüsselung</h5>
        <p>Diese Website nutzt aus Sicherheitsgründen eine SSL-bzw. TLS-Verschlüsselung. Damit werden übertragene Daten geschützt und können nicht von Dritten mitgelesen werden.</p>

        <h5>9. Änderungen dieser Datenschutzerklärung</h5>
        <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder Änderungen der Website anzupassen.</p>

        <p style={{marginTop: '30px', fontWeight: 'bold'}}>Stand: 03.09.2025</p>
      </div>
    </main>
  );
};

export default LandingPage;