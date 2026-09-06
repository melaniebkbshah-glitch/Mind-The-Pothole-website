const dlg=document.getElementById('lightbox');
const img=document.getElementById('lightboxImage');
if(dlg&&img){
 document.querySelectorAll('.shot[data-src]').forEach(b=>b.addEventListener('click',()=>{img.src=b.dataset.src;dlg.showModal();}));
 document.getElementById('closeLightbox').addEventListener('click',()=>dlg.close());
 dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
}
