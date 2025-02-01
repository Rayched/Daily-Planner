const Basic_URLs = "https://open.api.nexon.com/maplestory/v1";
const Keys = "test_f9ce4c7a085ed69bb5ef5d0d3b21357108ddddce8dbccfe8ecd4ed6db3cf9d32e9083e276f87ffa64730923916d0d710";

interface I_ocid {
    ocid?: string;
}

export function getOCIDs(charNm: string){
    const Ocid_URLs = Basic_URLs + `/id?character_name=${charNm}`;
    const getDatas = fetch(Ocid_URLs, {
        headers: {
            "x-nxopen-api-key": Keys
        }
    }).then((resp) => resp.json());

    const ocids = getDatas.then((data) => data.ocid);

    return ocids;
};

export async function getCharData(charNm: string){
    const Ocid = await getOCIDs(charNm);

    const characterURLs = Basic_URLs + `/character/basic?ocid=${Ocid}&date=2025-01-30`;

    const CharacterData = await(await(
        await fetch(characterURLs, {
            headers: {
                "x-nxopen-api-key": Keys
            }
        })
    ).json());
    
    return CharacterData;
};