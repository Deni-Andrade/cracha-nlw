const LinksSocialMidia={
  github:"deni andrade",
  youtube:"https://youtube.com",
  facebook:"https://facebook.com",
  instagram:"https://instagram.com",
  twitter:"https://twitter.com"
}   

function ChangeSocialMediaLinks(){
  for(let li of ChangeSocialMediaLinks.children){
    const social= li.getAttribute("class")

    li chldren[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}
ChangeSocialMediaLinks()

function GetGithuProfileInfos() {
  const ur l=  ´https://api.github.com/users/$
   {LinksSocialMidia.github}´
  alert (url)
  
  GetGithuProfileInfos()