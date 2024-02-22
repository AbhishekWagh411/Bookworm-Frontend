import { useEffect, useState } from 'react';



export default function Language({setSelectedLanguage }) {
    const [languageType, setLanguageType] = useState([]);
    //const [selectedLanguage, setSelectedLanguage] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/getAllLanguages")
            .then((res) => res.json())
            .then((data) => setLanguageType(data))

    }, []);
    const handleLanguageClick = (languageId) => {
        setSelectedLanguage(languageId);
        // console.log(languageId);
    };
    return (
        <>
        <div style={{ display: 'flex' }}>
    
          <div
            className="justify-content-start"
            aria-label="Toolbar with Button groups"
          >
            <div
              style={{
                paddingLeft: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              LANGUAGES
            </div>
            <div aria-label="Basic example">
            {/* <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}> */}

              {languageType.map((language) => (
                <div style={{ paddingLeft: "30px", marginBottom: "10px"  }}>
                  <input
                    type="radio"
                    name="language" 
                    key={language.languageId}
                    variant="secondary"
                    onClick={() => handleLanguageClick(language.languageId)}
                  />
                  <label>{language.languageDesc}</label>
                </div>
              ))}
            </div>
          </div>
          {/* {selectedLanguage && <MyLang typeId={typeId} langId={selectedLanguage} />} */}
          {/* <div
            className="justify-content-start"
            aria-label="Toolbar with Button groups"
          >
            <div
              style={{
                paddingLeft: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              GENRE
            </div>
            <div aria-label="Basic example">
              {languageType.map((language) => (
                <div style={{ paddingLeft: "30px", marginBottom: "10px"  }}>
                  <input
                    type="checkbox"
                    key={language.languageId}
                    variant="secondary"
                    onClick={() => handleLanguageClick(language.languageId)}
                  />
                  <label>{language.languageDesc}</label>
                </div>
              ))}
            </div>
          </div> */}
          </div>
        </>
);
}