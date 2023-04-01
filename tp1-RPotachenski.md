
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
# Travail pratique #01 — travailler avec Git.

Pour cet exercice vous devez noter les commandes que vous avez exécutées, vous devrez donc utiliser Git en ligne de commande (CLI). Notez les commandes Git sous leur point. Remettez un dossier complet incluant les trois répertoires Git et ce fichier texte.

## Remise

La remise des travaux se fera sur Léa, avant la séance #05. Aucun retard ne sera toléré, un travail remis après l'échéance sera considéré avec un jour de retard.

Politique sur les retards : Un travail en retard sera pénalisé de 5 % de la note maximale pour chaque jour de retard, et ce jusqu’à concurrence de 25 %. Aucun travail ne sera accepté au-delà de 5 jours de retard.

---

## Numéro 1 : Commande de base

1.	Créez un dépôt git en local

```
mkdir projet-tp1
git init (dans le docier)
```

 
2.	Créez les 3 fichiers suivant et y mettre quelques lignes de texte
	a.	index.html
	b.	 style.css
	c.	 main.js

```
 ni index.html, style.css, main.js
 git add index.html style.css main.js
```


3.	Vérifiez l’état de votre dépôt
```
git status
```

4.	Créez un commit avec ces trois fichiers
```
git commit -m "ajout de trois fichiers dans le repo projet-tp1"
```

5.	Faites la commande suivante : 
`` git status >> git_exercice1.log && git log >> git_exercice1.log``

J'ai utilisé la commande suivante pour faire la même chose in powershell
`` git status | Out-File -FilePath git_exercice1.log -Append; git log | Out-File -FilePath git_exercice1.log -Append ``

6.	Faites un commit pour ajouter le nouveau fichier créer (git_exercice1.log)
```
git add git_exercice1.log
git commit -m "ajout de git_exercice1.log dans projet-tp1"
```

## Numéro 2 : Travailler avec un distant (remote)

1.	Créez un dépôt nommé « n61-remote-git » sur votre compte Github.com. Si vous n’avez pas de compte, c’est le bon moment pour en créer un…
2.	Clonez le dépôt vide en local
```
git clone https://github.com/Rompo80/n61-remote-git.git
```
3.	Créez les 3 fichiers suivant et mettez-y quelques lignes de texte
	a.	index.html
	b.	 style.css
	c.	 main.js

```
cd n61-remote-git
ni index.html, style.css, main.js
git add index.html style.css main.js
```
4.	Vérifiez l’état de votre dépôt
```
git status
```
5.	Créez un commit avec ces trois fichiers
```
 git commit -m "ajout de index.html style.css main.js dans le repo n61-remote-git"
```
6.	Mettez à jour votre dépôt distant
```
git config credential.username "Rompo80"  //parce que j'ai utilisé l'autre compte github 
git push
```
7.	Faites une capture d’écran de votre dépôt distant et ajoutez le fichier image dans votre commit.
```
git add img_depot_distant.png
git commit -m "ajout de l'image sur le depot distant"
git push
```

## Numéro 3 : Travailler en équipe
1.	Forkez le projet https://github.com/emmacharp/exercice_git_equipe sur votre compte github. 

2.	Clonez le dépôt en local
```
git clone https://github.com/Rompo80/exercice_git_equipe.git
```
3.	Configurez le dépôt upstream pour qu’il pointe vers le dépôt que vous avez forké (et non votre dépôt distant)
```
cd exercice_git_equipe
git remote add upstream https://github.com/emmacharp/exercice_git_equipe.git

```
4.	Exécutez la commande ``git remote -v`` et copiez le contenu ici :
```
origin  https://github.com/Rompo80/exercice_git_equipe.git (fetch)
origin  https://github.com/Rompo80/exercice_git_equipe.git (push)
upstream        https://github.com/emmacharp/exercice_git_equipe.git (fetch)
upstream        https://github.com/emmacharp/exercice_git_equipe.git (push)
```
5.	Remplacez « Jonathan Martel » dans le fichier main.js et inscrivez-y votre nom. 
6.	Commitez vos changements, mettez à jour votre distant (remote)
```
git status
git add main.js
git commit -m "Modification du nom d'auteur dans fichier main.js"
git config credential.username "Rompo80"
git push origin
```


7.	Pour générer un conflit de code, ajoutez un nouveau remote avec lequel nous allons jouer en utilisant la commande suivante :  
`` git remote add depotconflit https://github.com/emmacharp/exercice_git_equipe_conflit``
8.	Faite la mise à jour et la fusion de votre dépôt local avec le nouveau dépôt distant :  
``git pull depotconflit master``  
Et copiez la réponse du terminal ici :  
```
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 323 bytes | 32.00 KiB/s, done.
From https://github.com/emmacharp/exercice_git_equipe_conflit
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> depotconflit/master
Auto-merging main.js
CONFLICT (content): Merge conflict in main.js
Automatic merge failed; fix conflicts and then commit the result.
```
9.	Réglez les conflits, finalisez la fusion et mettez à jour votre distant (push sur origin)
main.js est netoyer 
git add main.js
git commit -m "Résolution du conflit de fusion dans main.js"
git push origin
10.	Sur Github.com, ouvrez une demande de pull-request vers https://github.com/emmacharp/exercice_git_equipe

