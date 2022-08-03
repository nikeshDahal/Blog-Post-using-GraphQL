
const Subscription = {
    // count:{
    //     subscribe(parent,args,ctx,info){
    //         const {pubsub}=ctx
    //         let count =0
    //         // pubsub.publish('count',400)
    //         setInterval(()=>{
    //             count++
    //             pubsub.publish('count',{
    //                 count
    //             })
    //         },1000)
    //         return pubsub.asyncIterator('count')
    //     }
    // },
    comment:{
        subscribe(parent,args,ctx,info){
            const{pubsub,db}=ctx
            const{postId}=args
            const post = db.post.find((post)=>post.id === postId && post.published)
            if(!post){
                throw new Error("no post found")
            }
            return pubsub.asyncIterator(`comment-${post.id}`)
        }
    },
    post:{
        subscribe(parent,args,ctx,info){
            const {pubsub,db}=ctx
            return pubsub.asyncIterator(`post`)
        }
    }

}
export {Subscription as default}