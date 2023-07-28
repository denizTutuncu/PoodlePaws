import { FC } from "react"
import { Dao } from "../../components/DAO/Dao"
import styles from '../../styles/custom.module.css';
import { PublicKey } from "@solana/web3.js"

export const DAOView: FC = ({}) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          DAO 
        </h1>
        <h1 className="text-left text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Future proposals will be displayed here, but voting will happen on Realms.
        </h1>
        <div className="text-center">
          <Dao></Dao>
        </div>
        <div className="md:hero mx-auto p-5">
          <div className="md:hero-content flex flex-col">
            
            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-4xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                NFTs and DAOs: A Symbiotic Relationship
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of specific items, artworks, collectibles, or any other digital or physical assets. 
                They are indivisible, non-interchangeable, and provably scarce, making them ideal for representing ownership of unique items in the digital world. 
                NFTs are typically built on blockchain technology, providing immutability and ensuring that ownership records cannot be altered or duplicated. 
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                In the context of a DAO like Poodle Paws, NFTs play a vital role in connecting individual stakeholders to the organization. 
                Each NFT in the Poodle Paws World Tour Collection represents a unique key 🔑 that grants its owner access to participate in the DAO's decision-making and governance processes. 
                This is where the true power of NFT ownership lies.</p>
            </h3>

            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-4xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                NFTs and Voting Power
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              The ownership of a specific NFT confers voting power within the DAO. 
              In the case of Poodle Paws DAO, the 89 stakeholders who hold these NFTs have the authority to propose new ideas, suggest changes to the organization, or vote on existing proposals. 
              The voting process is typically conducted on-chain through smart contracts, ensuring that it is transparent and tamper-proof.</p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              Each NFT owner has the opportunity to voice their opinion, express their preferences, and cast their vote on proposals put forward by the community. 
              This democratic approach ensures that no single entity or group has disproportionate control over the organization's decisions. 
              Instead, voting power is distributed among all NFT holders, fostering a fair and inclusive governance model.
                </p>
            </h3>
            
            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-4xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                DAO and Ownership: Empowering Shareholders
              </p>
            </h2>
        
            <img className={styles.product_image}src='/dao.png' alt='Poodle Paws DAO'/>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              DAOs like Poodle Paws operate on the principle that governance decisions are determined by the majority vote of stakeholders. 
              This means that the direction of the organization, including the allocation of resources and profits, is influenced directly by those who own NFTs and actively participate in the decision-making process.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Ownership of NFTs effectively makes stakeholders part-owners of the DAO, giving them a direct stake in the organization's success and future. 
                As they hold NFTs, they become legitimate shareholders with the right to propose initiatives that align with the organization's mission, suggest improvements, and collectively decide on the distribution of profits.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                The democratic and transparent nature of DAOs ensures that decisions are made openly and that stakeholders have access to all relevant information. 
                This transparency builds trust and empowers shareholders to actively engage in the organization's activities, fostering a strong sense of community and shared responsibility.
              </p>
            </h3>

            <h2 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-4xl md:pl-12  text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              Profits and Sustainability
              </p>
            </h2>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                The Poodle Paws DAO generates profits through various means, such as the creation of additional NFT collections or physical products. 
                These profits are then channeled back into the organization to support its mission, which includes furthering its reach as a prominent pet brand and contributing to animal welfare initiatives worldwide.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                By having direct control over how profits are used and allocated, NFT owners can influence the DAO's priorities and ensure that the organization remains true to its values and goals. 
                This alignment between financial success and the organization's mission creates a sustainable model where profits are reinvested to drive positive impact and growth.
              </p>
            </h3>

            <h3 className="md:w-full text-left text-slate-300 my-2">
              <p className="max-auto text-left text-2xl md:pl-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                In conclusion, NFTs and DAOs form a symbiotic relationship, where NFT ownership grants stakeholders voting power and influence over the organization's governance, including decisions about profits and sustainability. 
                This decentralized and democratic approach gives stakeholders a genuine sense of ownership and control, empowering them to actively shape the future of the DAO and drive its success in achieving its broader mission and objectives.
              </p>
            </h3>

            <div className="text-center">
              <Dao></Dao>
            </div>
      </div>
    </div>
      </div>
    </div>
  )
}

